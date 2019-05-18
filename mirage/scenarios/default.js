export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const cp = server.create('coin', { name: 'CP', value: 0.01 }),
    sp = server.create('coin', { name: 'SP', value: 0.1 }),
    ep = server.create('coin', { name: 'EP', value: 0.5 }),
    gp = server.create('coin', { name: 'GP', value: 1 }),
    pp = server.create('coin', { name: 'PP', value: 10 }),
    d1 = server.create('die', { ceil: 1, floor: 1, name: 'd1', show_to_user: false }),
    d4 = server.create('die', { ceil: 4, floor: 1, name: 'd4' }),
    d6 = server.create('die', { ceil: 6, floor: 1, name: 'd6' }),
    d8 = server.create('die', { ceil: 8, floor: 1, name: 'd8' }),
    d10 = server.create('die', { ceil: 10, floor: 1, name: 'd10' });
  let tr = null, 
    trs = null;

  server.create('die', { ceil: 2, floor: 1, name: 'd2' });
  server.create('die', { ceil: 3, floor: 1, name: 'd3' });
  d20 = server.create('die', { ceil: 20, floor: 1, name: 'd20' });
  d100 = server.create('die', { ceil: 100, floor: 1, name: 'd100' });

  server.create('art-object', { name: 'Silver ewer', value: 25 });
  server.create('art-object', { name: 'Carved bone statuette', value: 25 });
  server.create('art-object', { name: 'Gold ring set with bloodstones', value: 250 });
  server.create('art-object', { name: 'Carved ivory statuette', value: 250 });
  server.create('art-object', { name: 'Silver chalice set with moonstones', value: 750 });
  server.create('art-object', { name: 'Silver-plated steel longsword with jet set in hilt', value: 750 });
  server.create('art-object', { name: 'Fine gold chain set with a fire opal', value: 2500 });
  server.create('art-object', { name: 'Old masterpiece painting', value: 2500 });
  server.create('art-object', { name: 'Jeweled gold crown', value: 7500 });
  server.create('art-object', { name: 'Jeweled platinum ring', value: 7500 });

  server.create('gemstone', { description: 'opaque mottled deep blue', name: 'Azurite', value: 10 });
  server.create('gemstone', { description: 'opaque dark gray with red flecks', name: 'Bloodstone', value: 50 });
  server.create('gemstone', { description: 'transparent watery gold to rich gold', name: 'Amber', value: 100 });
  server.create('gemstone', { description: 'transparent dark green', name: 'Alexandrite', value: 500 });
  server.create('gemstone', { description: 'translucent dark green with black mottling and golden flecks', name: 'Black opal', value: 1000 });
  server.create('gemstone', { description: 'translucent lustrous black with glowing highlights', name: 'Black sapphire', value: 5000 });

  server.create('magic-item', { max: 50, min: 1, name: 'potion of healing', table: 'A' });
  server.create('magic-item', { max: 60, min: 51, name: 'spell scroll (cantrip)', table: 'A' });
  server.create('magic-item', { max: 70, min: 61, name: 'potion of climbing', table: 'A' });
  server.create('magic-item', { max: 90, min: 71, name: 'spell scroll (1st level)', table: 'A' });
  server.create('magic-item', { max: 94, min: 91, name: 'spell scroll (2nd level)', table: 'A' });
  server.create('magic-item', { max: 98, min: 95, name: 'potion of greater healing', table: 'A' });
  server.create('magic-item', { max: 99, min: 99, name: 'bag of holding', table: 'A' });
  server.create('magic-item', { max: 100, min: 100, name: 'driftglobe', table: 'A' });

  // hoard rules CR 0 to CR 4
  trs = server.create('treasure-rule-set', { max_cr: 4, min_cr: 0, treasure_type: 'hoard' });
  server.create('dice-calculation', { dice_count: 6, multiplier: 100, coin: cp, die: d6, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, multiplier: 100, coin: sp, die: d6, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, multiplier: 10, coin: gp, die: d6, treasure_rule_set: trs });

  tr = server.create('treasure-rule', { max: 6, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 0, die: d6, item_type: 'gemstone', item_value: 10, multiplier: 0, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 16, min: 7, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 26, min: 17, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 36, min: 27, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 44, min: 37, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 10, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 52, min: 45, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 60, min: 53, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_Count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 65, min: 61, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 10, die:d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 70, min: 66, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 75, min: 71, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_Table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 78, min: 76, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 10, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'C', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 80, min: 79, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_Type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'C', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 85, min: 81, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-caluclation', { item_table: 'C', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 92, min: 86, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'F', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 97, min: 93, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'F', item_type: 'magic-item', die: d10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 99, min: 98, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_Table: 'G', item_type: 'magic-item', die: d1, treasure_rule: tr });
  
  tr = server.create('treasure-rule', { max: 100, min: 100, treasure_rule_set: trs });
  server.create('dice-caculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'G', item_type: 'magic-item', die: d1, treasure_rule: tr });

  // hoard treasure rule set CR 5 to CR 10
  trs = server.create('treasure-rule-set', { max_cr: 10, min_cr: 5, treasure_type: 'hoard' });
  server.create('dice-calculation', { dice_count: 2, multiplier: 100, coint: cp, die: d6, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, multiplier: 1000, coin: sp, die: d6, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 6, multiplier: 100, coin: gp, die: d6, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, multiplier: 10, coint: pp, die: d6, treasure_rule_set: trs });

  tr = server.create('treasure-rule', { max: 4, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 0, item_type: 'gemstone', item_value: 10, multiplier: 0, die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 10, min: 5, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 16, min: 11, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 22, min: 17, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, item_type: 'gemstone', item_value: 100, die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 28, min: 23, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 32, min: 29, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 36, min: 33, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 40, min: 37, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, item_type: 'gemstone', item_value: 100, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 44, min: 41, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 250, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 49, min: 45, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, item_type: 'art-object', item_value: 25, die: d4, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 54, min: 50, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, item_type: 'gemstone', item_value: 50, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 59, min: 55, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, item_type: 'gemstone', item_value: 100, die: d6, treasure_rule: tr });
  server.create('dice-calculation', { item_table: 'B', item_type: 'magic-item', die: d4, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 63, min: 60, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'B', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 66, min: 64, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 25, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 69, min: 67, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 50, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 72, min: 70, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 74, min: 73, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 76, min: 75, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 25, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 78, min: 77, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, item_type: 'gemstone', item_value: 50, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 79, min: 79, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 80, min: 80, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 84, min: 81, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 25, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'F', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 88, min: 85, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 50, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'F', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 91, min: 89, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'art-object', item_value: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'F', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 94, min: 92, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'F', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 96, min: 95, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 98, min: 97, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 99, min: 99, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 100, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'H', treasure_rule: tr });

  // hoard treasure rules CR 11 to CR 16
  trs = server.create('treasure-rule-set', { max_cr: 16, min_cr: 11, treasure_type: 'hoard' });
  server.create('dice-calculation', { coin: gp, dice_count: 4, die: d6, multiplier: 1000, treasure_rule_set: trs });
  server.create('dice-calculation', { coin: pp, dice_count: 5, die: d6, multiplier: 100, treasure_rule_set: trs });

  tr = server.create('treasure-rule', { max: 3, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 0, die: d6, item_type: 'gemstone', item_value: 10, multiplier: 0, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 6, min: 4, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 9, min: 7, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 12, min: 10, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 15, min: 13, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 19, min: 16, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'A', treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'B', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 23, min: 20, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'A', treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'B', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 26, min: 24, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'A', treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'B', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 29, min: 27, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'A', treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'B', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 35, min: 30, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 40, min: 36, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 45, min: 41, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 50, min: 46, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 54, min: 51, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 58, min: 55, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 62, min: 59, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 66, min: 63, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 68, min: 67, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 70, min: 69, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 72, min: 71, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 74, min: 73, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 76, min: 75, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'F', treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 78, min: 77, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'F', treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 80, min: 79, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'F', treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 82, min: 81, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'F', treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 85, min: 83, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 88, min: 86, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 90, min: 89, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 92, min: 91, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 94, min: 93, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 250, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 96, min: 95, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d4, item_type: 'art-object', item_value: 750, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 98, min: 97, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 500, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 99, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d1, item_table: 'I', treasure_rule: tr });

  // hoard rules CR 17+
  trs = server.create('treasure-rule-set', { min_cr: 17, treasure_type: 'hoard' });
  server.create('dice-calculation', { coin: gp, dice_count: 12, die: d6, multiplier: 1000, treasure_rule_set: trs });
  server.create('dice-calculation', { coin: pp, dice_count: 8, die: d6, multiplier: 1000, treasure_rule_set: trs });

  tr = server.create('treasure-rule', { max: 2, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 0, die: d6, item_type: 'gemstone', item_value: 10, multiplier: 0, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 5, min: 3, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d8, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 8, min: 6, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d8, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 11, min: 9, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d8, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 14, min: 12, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d8, item_table: 'C', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 22, min: 15, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 30, min: 23, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 38, min: 31, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 46, min: 39, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'D', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 52, min: 47, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 58, min: 53, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 63, min: 59, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 68, min: 64, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, item_table: 'E', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 69, min: 69, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 70, min: 70, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 71, min: 71, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 72, min: 72, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'G', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 74, min: 73, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 76, min: 75, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 78, min: 77, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 80, min: 79, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'H', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 85, min: 81, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, item_type: 'gemstone', item_value: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 90, min: 86, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d10, item_type: 'art-object', item_value: 2500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 95, min: 91, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d4, item_type: 'art-object', item_value: 7500, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'I', treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 96, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d8, item_type: 'gemstone', item_value: 5000, treasure_rule: tr });
  server.create('dice-calculation', { die: d4, item_table: 'I', treasure_rule: tr });

  // individual treasure rules CR 1 to CR 4
  trs = server.create('treasure-rule-set', { max_cr: 4, min_cr: 0, treasure_type: 'individual' });

  tr = server.create('treasure-rule', { max: 30, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 5, die: d6, coin: cp, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 60, min: 31, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 4, die: d6, coin: sp, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 70, min: 61, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, coin: ep, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 95, min: 71, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, coin: gp, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 96, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d6, coin: pp, treasure_rule: tr });

  // individual treasure rules CR 5 ro CR 10
  trs = server.create('treasure-rule-set', { max_cr: 10, min_cr: 5, treasure_type: 'individual' });

  tr = server.create('treasure-rule', { max: 30, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 4, die: d6, coin: cp, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, coin: ep, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 60, min: 31, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 6, die: d6, coin: sp, multiplier: 10, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: gp, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 70, min: 61, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, coin: ep, multiplier: 10, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: gp, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 95, min: 71, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 4, die: d6, coin: gp, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 96, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 3, die: d6, coin: pp, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: gp, multiplier: 10, treasure_rule: tr });

  // individual treasure rules CR 11 to CR 16
  trs = server.create('treasure-rule-set', { max_cr: 16, min_cr: 11, treasure_type: 'individual' });

  tr = server.create('treasure-rule', { max: 20, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 4, die: d6, coin: sp, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 1, die: d6, coin: gp, multiplier: 100, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 35, min: 21, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d6, coin: ep, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, coin: gp, multiplier: 100, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 75, min: 36, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: gp, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, coin: pp, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 76, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: gp, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: pp, multiplier: 10, treasure_rule: tr });

  // individual treasure rules CR 17+
  trs = server.create('treasure-rule-set', { min_cr: 17, treasure_type: 'individual' });

  tr = server.create('treasure-rule', { max: 15, min: 1, treasure_rule_set: trs });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: ep, multiplier: 100, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 8, die: d6, coin: gp, multiplier: 10, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 55, min: 16, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d6, coin: gp, multiplier: 1000, treasure_rule: tr });
  server.create('dice-calculation', { die: d6, coin: pp, multiplier: 100, treasure_rule: tr });

  tr = server.create('treasure-rule', { max: 100, min: 56, treasure_rule_set: trs });
  server.create('dice-calculation', { die: d6, coin: gp, multiplier: 1000, treasure_rule: tr });
  server.create('dice-calculation', { dice_count: 2, die: d6, coin: pp, multiplier: 100, treasure_rule: tr });
}
