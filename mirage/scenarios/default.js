export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

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

  server.create('coin', { name: 'CP', value: 0.01 });
  server.create('coin', { name: 'SP', value: 0.1 });
  server.create('coin', { name: 'EP', value: 0.5 });
  server.create('coin', { name: 'GP', value: 1 });
  server.create('coin', { name: 'PP', value: 10 });

  server.create('die', { ceil: 2, floor: 1, name: 'd2' });
  server.create('die', { ceil: 3, floor: 1, name: 'd3' });
  server.create('die', { ceil: 4, floor: 1, name: 'd4' });
  server.create('die', { ceil: 6, floor: 1, name: 'd6' });
  server.create('die', { ceil: 8, floor: 1, name: 'd8' });
  server.create('die', { ceil: 10, floor: 1, name: 'd10' });
  server.create('die', { ceil: 20, floor: 1, name: 'd20' });
  server.create('die', { ceil: 100, floor: 1, name: 'd100' });

  server.create('gemstone', { description: 'opaque mottled deep blue', name: 'Azurite', value: 10 });
  server.create('gemstone', { description: 'opaque dark gray with red flecks', name: 'Bloodstone', value: 50 });
  server.create('gemstone', { description: 'transparent watery gold to rich gold', name: 'Amber', value: 100 });
  server.create('gemstone', { description: 'transparent dark green', name: 'Alexandrite', value: 500 });
  server.create('gemstone', { description: 'translucent dark green with black mottling and golden flecks', name: 'Black opal', value: 1000 });
  server.create('gemstone', { description: 'translucent lustrous black with glowing highlights', name: 'Black sapphire', value: 5000 });
  server.create('treasure-rule', {
    'max-cr': 4,
    'min-cr': 0,
    'treasure-type': 'individual',
    rules: [
      {
        max: 30,
        min: 1,
        diceCount: 5,
        dieType: 'd6',
        coinType: 'CP'
      },
      {
        max: 60,
        min: 31,
        diceCount: 4,
        dieType: 'd6',
        coinType: 'SP'
      },
      {
        max: 70,
        min: 61,
        diceCount: 3,
        dieType: 'd6',
        coinType: 'EP'
      },
      {
        max: 95,
        min: 71,
        diceCount: 3,
        dieType: 'd6',
        coinType: 'GP'
      },
      {
        max: 100,
        min: 96,
        diceCount: 1,
        dieType: 'd6',
        coinType: 'PP'
      }
    ]
  });
}
