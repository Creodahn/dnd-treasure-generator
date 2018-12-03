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

  server.create('magic-item', { max: 50, min: 1, name: 'potion of healing', table: 'A' });
  server.create('magic-item', { max: 60, min: 51, name: 'spell scroll (cantrip)', table: 'A' });
  server.create('magic-item', { max: 70, min: 61, name: 'potion of climbing', table: 'A' });
  server.create('magic-item', { max: 90, min: 71, name: 'spell scroll (1st level)', table: 'A' });
  server.create('magic-item', { max: 94, min: 91, name: 'spell scroll (2nd level)', table: 'A' });
  server.create('magic-item', { max: 98, min: 95, name: 'potion of greater healing', table: 'A' });
  server.create('magic-item', { max: 99, min: 99, name: 'bag of holding', table: 'A' });
  server.create('magic-item', { max: 100, min: 100, name: 'driftglobe', table: 'A' });

  server.create('treasure-rule', {
    'max-cr': 4,
    'min-cr': 0,
    'treasure-type': 'individual',
    rules: [
      {
        max: 30,
        min: 1,
        calculations: [{
          diceCount: 5,
          dieType: 'd6',
          coinType: 'CP'
        }]
      },
      {
        max: 60,
        min: 31,
        calculations: [{
          diceCount: 4,
          dieType: 'd6',
          coinType: 'SP'
        }]
      },
      {
        max: 70,
        min: 61,
        calculations: [{
          diceCount: 3,
          dieType: 'd6',
          coinType: 'EP'
        }]
      },
      {
        max: 95,
        min: 71,
        calculations: [{
          diceCount: 3,
          dieType: 'd6',
          coinType: 'GP'
        }]
      },
      {
        max: 100,
        min: 96,
        calculations: [{
          diceCount: 1,
          dieType: 'd6',
          coinType: 'PP'
        }]
      }
    ]
  });
  server.create('treasure-rule', {
    'max-cr': 10,
    'min-cr': 5,
    'treasure-type': 'individual',
    rules: [
      {
        max: 30,
        min: 1,
        calculations: [{
          diceCount: 4,
          dieType: 'd6',
          coinType: 'CP',
          multiplier: 100
        },
        {
          diceCount: 1,
          dieType: 'd6',
          coinType: 'EP',
          multiplier: 10
        }]
      },
      {
        max: 60,
        min: 31,
        calculations: [{
          diceCount: 6,
          dieType: 'd6',
          coinType: 'SP',
          multiplier: 10
        },
        {
          diceCount: 2,
          dieType: 'd6',
          coinType: 'GP',
          multiplier: 10
        }]
      },
      {
        max: 70,
        min: 61,
        calculations: [{
          diceCount: 3,
          dieType: 'd6',
          coinType: 'EP',
          multiplier: 10
        },
        {
          diceCount: 2,
          dieType: 'd6',
          coinType: 'GP',
          multiplier: 10
        }]
      },
      {
        max: 95,
        min: 71,
        calculations: [{
          diceCount: 4,
          dieType: 'd6',
          coinType: 'GP',
          multiplier: 10
        }]
      },
      {
        max: 100,
        min: 96,
        calculations: [{
          diceCount: 3,
          dieType: 'd6',
          coinType: 'PP',
          multiplier: 1
        },
        {
          diceCount: 2,
          dieType: 'd6',
          coinType: 'GP',
          multiplier: 10
        }]
      }
    ]
  });
  server.create('treasure-rule', {
    'max-cr': 16,
    'min-cr': 11,
    'treasure-type': 'individual',
    rules: [
      {
        max: 20,
        min: 1,
        calculations: [
          {
            diceCount: 4,
            dieType: 'd6',
            coinType: 'SP',
            multiplier: 100
          },
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 100
          }
        ]
      },
      {
        max: 35,
        min: 21,
        calculations: [
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'EP',
            multiplier: 100
          },
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 100
          }
        ]
      },
      {
        max: 75,
        min: 36,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 100
          },
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'PP',
            multiplier: 10
          }
        ]
      },
      {
        max: 100,
        min: 76,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 100
          },
          {
            diceCount: 2,
            dieType: 'd6',
            coinType: 'PP',
            multiplier: 10
          }
        ]
      }
    ]
  });

  server.create('treasure-rule', {
    'min-cr': 17,
    'treasure-type': 'individual',
    rules: [
      {
        max: 15,
        min: 1,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            coinType: 'EP',
            multiplier: 1000
          },
          {
            diceCount: 8,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 100
          }
        ]
      },
      {
        max: 55,
        min: 16,
        calculations: [
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 1000
          },
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'PP',
            multiplier: 100
          }
        ]
      },
      {
        max: 100,
        min: 56,
        calculations: [
          {
            diceCount: 1,
            dieType: 'd6',
            coinType: 'GP',
            multiplier: 1000
          },
          {
            diceCount: 2,
            dieType: 'd6',
            coinType: 'PP',
            multiplier: 100
          }
        ]
      }
    ]
  });

  server.create('treasure-rule', {
    'max-cr': 4,
    'min-cr': 0,
    'treasure-type': 'hoard',
    rules: [
      {
        max: 6,
        min: 1,
        calculations: [
          {
            diceCount: 0,
            dieType: 'd6',
            items: {
              type: 'gemstone',
              value: 10
            },
            multiplier: 0
          }
        ]
      },
      {
        max: 16,
        min: 7,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            items: {
              type: 'gemstone',
              value: 10
            },
            multiplier: 1
          }
        ]
      },
      {
        max: 26,
        min: 17,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd4',
            items: {
              type: 'art-object',
              value: 25
            },
            multiplier: 1
          }
        ]
      },
      {
        max: 36,
        min: 27,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            items: {
              type: 'gemstones',
              value: 50
            }
          }
        ],
        multiplier: 1
      },
      {
        max: 100,
        min: 37,
        calculations: [
          {
            diceCount: 2,
            dieType: 'd6',
            items: {
              type: 'gemstones',
              value: 10
            }
          },
          {
            diceCount: 1,
            dieType: 'd6',
            items: {
              table: 'A',
              type: 'magic-item',
            }
          }
        ]
      }
    ]
  });
}
