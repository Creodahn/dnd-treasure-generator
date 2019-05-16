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
  d2 = server.create('die', { ceil: 2, floor: 1, name: 'd2' }),
  d3 = server.create('die', { ceil: 3, floor: 1, name: 'd3' }),
  d4 = server.create('die', { ceil: 4, floor: 1, name: 'd4' }),
  d6 = server.create('die', { ceil: 6, floor: 1, name: 'd6' }),
  d8 = server.create('die', { ceil: 8, floor: 1, name: 'd8' }),
  d10 = server.create('die', { ceil: 10, floor: 1, name: 'd10' }),
  d20 = server.create('die', { ceil: 20, floor: 1, name: 'd20' }),
  d100 = server.create('die', { ceil: 100, floor: 1, name: 'd100' });
let tr = null, 
  trs = null;

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

  // hoard rules
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
  server,create('dice-calculation', { item_table: 'A', item_type: 'magic-item', die: d6, treasure_rule: tr });

}
