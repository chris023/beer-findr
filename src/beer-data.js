const coloradoBeer = [
  {
    name: 'Fortuna',
    breweryID: 1,
    style: [
      'American Wild Ale',
      'Barrel-Aged'
      ],
    abv: 8.1,
    tastingNotes: [
      'sour',
      'salty',
      'tequila',
      'spicy'
      ],
    image: 'https://i.imgur.com/2BUsyQa.jpg'
  },
  {
    name: 'The Kaiser',
    breweryID: 1,
    style: [
      'Marzen Lager',
      'Imperial', 
      'Oktoberfest'
      ],
    abv: 10.2,
    tastingNotes: [
      'cherry',
      'prune',
      'molasses',
      'toffee'
      ],
    image: 'https://i.imgur.com/xnKi7eB.jpg'
  },
  {
    name: 'Maharaja',
    breweryID: 1,
    style: [
      'Double IPA',
      'Imperial IPA'
      ],
    abv: 10.2,
    tastingNotes: [
      'malty',
      'toasty',
      'toffee',
      'pine',
      'tropical'
      ],
    image: 'https://i.imgur.com/NTtpnBh.jpg'
  },
  {
    name: 'Old Jubilation',
    breweryID: 1,
    style: [
      'English Warmer',
      'English Old Ale',
      'English Strong Ale'
      ],
    abv: 8.3,
    tastingNotes: [
      'malty',
      'complex',
      'plum',
      'molasses',
      'toffee'
      ],
    image: 'https://i.imgur.com/fG3ogvA.jpg'
  },
  {
    name: 'Tweak',
    breweryID: 1,
    style: [
      'Barrel-Aged',
      'Stout'
      ],
    abv: 17.5,
    tastingNotes: [
      'vanilla',
      'custard',
      'mocha',
      'maple',
      'bourbon'
      ],
    image: 'https://i.imgur.com/KdsvqYw.jpg'
  },
  {
    name: 'White Rascal',
    breweryID: 1,
    style: [
      'Belgian Wit',
      'Witbier'
      ],
    abv: 5.6,
    tastingNotes: [
      'dry',
      'coriander',
      'clove'
      ],
    image: 'https://i.imgur.com/SHgcZA2.jpg'
  },
  {
    name: 'BBA Here Be Monsters',
    breweryID: 2,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 12,
    tastingNotes: [
      'bourbon',
      'chocolate',
      'toffee'
      ],
    image: 'https://i.imgur.com/RCALF0i.jpg'
  },
  {
    name: 'Nightmare on Brett (red wine casks)',
    breweryID: 3,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 9.6,
    tastingNotes: [
      'black cherry',
      'plum',
      'nutty',
      'roasted',
      'oaky',
      'heavy'
      ],
    image: 'https://i.imgur.com/9AB6D9l.jpg'
  },
  {
    name: 'Origins',
    breweryID: 3,
    style: [
      'Flanders Red',
      'Sour'
      ],
    abv: 6.5,
    tastingNotes: [
      'tart',
      'sour',
      'berries',
      'dry',
      'oaky'
      ],
    image: 'https://i.imgur.com/gKEGEkR.jpg'
  },
  {
    name: 'Surette Provision',
    breweryID: 3,
    style: [
      'Saison',
      'Farmhouse Ale'
      ],
    abv: 6.2,
    tastingNotes: [
      'funky',
      'green apple',
      'citrus',
      'butter',
      'rustic'
      ],
    image: 'https://i.imgur.com/PXMgz3q.jpg'
  },
  {
    name: 'Vielle Artisinal Saison',
    breweryID: 3,
    style: [
      'Saison',
      'Farmhouse Ale'
      ],
    abv: 4.2,
    tastingNotes: [
      'funky',
      'green apple',
      'lemon',
      'tangy'
      ],
    image: 'https://i.imgur.com/UaEFjZc.jpg'
  },
  {
    name: 'Bligh\'s Barleywine',
    breweryID: 4,
    style: [
      'Barleywine',
      'Barrel-Aged'
      ],
    abv: 10,
    tastingNotes: [
      'brandy',
      'bourbon',
      'syrup',
      'butterscotch'
      ],
    image: 'https://i.imgur.com/yugtrro.jpg'
  },
  {
    name: 'Big Bad Baptista',
    breweryID: 5,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 12.2,
    tastingNotes: [
      'chocolate',
      'cinnamon',
      'coffee',
      'vanilla'
      ],
    image: 'https://i.imgur.com/TYYwzR2.jpg'
  },
  {
    name: 'Double Barrel Big Bad Baptist',
    breweryID: 5,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 12.8,
    tastingNotes: [
      'coffee',
      'syrup',
      'bourbon',
      'smokey',
      'roasted'
      ],
    image: 'https://i.imgur.com/poSMZo7.jpg'
  },
  {
    name: 'BBA Malice and Darkness',
    breweryID: 6,
    style: [
      'Imperial Stout'
      ],
    abv: 14,
    tastingNotes: [
      'roasted',
      'coffee',
      'caramel',
      'oak',
      'dark chocolate',
      'smokey'
      ],
    image: 'https://i.imgur.com/ObCeKHL.jpg'
  },
  {
    name: 'Raspberry Provicial',
    breweryID: 7,
    style: [
      'American Wild Ale',
      'Sour'
      ],
    abv: 4.2,
    tastingNotes: [
      'sour',
      'tart',
      'raspberry'
      ],
    image: 'https://i.imgur.com/nEZgzuZ.jpg'
  },
  {
    name: 'Ten',
    breweryID: 7,
    style: [
      'Quad Ale',
      'Quadrupel Ale',
      'Belgian'
      ],
    abv: 10,
    tastingNotes: [
      'bready',
      'dark fruit',
      'caramel',
      'toffee'
      ],
    image: 'https://i.imgur.com/1FVsJfr.jpg'
  },
  {
    name: 'Fresh Hop Pale Ale',
    breweryID: 8,
    style: [
      'American Pale Ale',
      'Pale Ale',
      'Fresh Hop Ale'
      ],
    abv: 6.1,
    tastingNotes: [
      'herbal',
      'grass',
      'spicy',
      'dry'
      ],
    image: 'https://i.imgur.com/ffCT1Fu.jpg'
  },
  {
    name: 'Hoss Oktoberfest Lager',
    breweryID: 8,
    style: [
      'Marzen Lager',
      'Oktoberfest',
      'Rye Lager'
      ],
    abv: 6.2,
    tastingNotes: [
      'earthy',
      'malty',
      'dry'
      ],
    image: 'https://i.imgur.com/msDGpA5.jpg'
  },
  {
    name: 'St. Vrain',
    breweryID: 9,
    style: [
      'Belgian',
      'Tripel Ale'
      ],
    abv: 9,
    tastingNotes: [
      'citrus',
      'bright',
      'banana',
      'stone fruit',
      'bready'
      ],
    image: 'https://i.imgur.com/DSLCtk5.jpg'
  },
  {
    name: 'Blackberry Barleywine',
    breweryID: 10,
    style: [
      'Barleywine'
      ],
    abv: 10,
    tastingNotes: [
      'jam',
      'blackberry',
      'rich'
      ],
    image: 'https://i.imgur.com/xonYxsF.jpg'
  },
  {
    name: 'La Folie',
    breweryID: 10,
    style: [
      'Oud Bruin',
      'Sour'
      ],
    abv: 7,
    tastingNotes: [
      'tart',
      'cherry',
      'oaky',
      'balanced'
      ],
    image: 'https://i.imgur.com/n0OvUOe.jpg'
  },
  {
    name: 'Trippel',
    breweryID: 10,
    style: [
      'Belgian',
      'Tripel Ale'
      ],
    abv: 8.5,
    tastingNotes: [
      'creamy',
      'dark fruit',
      'citrus',
      'coriander',
      'anise'
      ],
    image: 'https://i.imgur.com/ASfHVsU.jpg'
  },
  {
    name: 'Easy Street Wheat',
    breweryID: 11,
    style: [
      'Wheat Beer',
      'American Pale Wheat'
      ],
    abv: 4.6,
    tastingNotes: [ 
      'creamy',
      'bready',
      'crisp'
      ],
    image: 'https://i.imgur.com/2rook8H.jpg'
  },
  {
    name: 'Mercenary DIPA',
    breweryID: 11,
    style: [
      'Double IPA',
      'Imperial IPA'
      ],
    abv: 9.3,
    tastingNotes: [
      'lemon',
      'grassy',
      'hoppy'
      ],
    image: 'https://i.imgur.com/VaXHWHN.jpg'
  },
  {
    name: 'St. Lupulin',
    breweryID: 11,
    style: [
      'American Pale Ale',
      'Extra Pale Ale'
      ],
    abv: 6.5,
    tastingNotes: [
      'earthy',
      'hoppy',
      'bready',
      'balanced'
      ],
    image: 'https://i.imgur.com/1n1HIOQ.jpg'
  },
  {
    name: 'Dale\'s Pale Ale',
    breweryID: 12,
    style: [
      'American Pale Ale'
      ],
    abv: 6.5,
    tastingNotes: [
      'hoppy',
      'grapefruit',
      'pine',
      'malty',
      'balanced'
      ],
    image: 'https://i.imgur.com/XzcM5eW.jpg'
  },
  {
    name: 'Pinner',
    breweryID: 12,
    style: [
      'IPA',
      'Session IPA'
      ],
    abv: 4.9,
    tastingNotes: [
      'citrus',
      'clementine',
      'tangerine',
      'hoppy'
      ],
    image: 'https://i.imgur.com/AVhiW18.jpg'
  },
  {
    name: 'Ten FIDY',
    breweryID: 12,
    style: [
      'Imperial Stout'
      ],
    abv: 10.5,
    tastingNotes: [
      'coffee',
      'light roast',
      'fruit'
      ],
    image: 'https://i.imgur.com/lg0XxrO.jpg'
  },
  {
    name: 'Rum Barrel Ten FIDY',
    breweryID: 12,
    style: [
      'Imperial Stout',
      'Barrel-Aged'
      ],
    abv: 14.2,
    tastingNotes: [
      'roasted',
      'chewy',
      'coconut',
      'cocoa',
      'clove'
      ],
    image: 'https://i.imgur.com/KYmDJjF.jpg'
  },
  {
    name: 'Java BBA Ten FIDY',
    breweryID: 12,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 10.5,
    tastingNotes: [
      'coffee',
      'roasted',
      'kahlua',
      'dark fruit'
      ],
    image: 'https://i.imgur.com/0Z2EG08.jpg'
  },
  {
    name: 'BBA Nightmare Fuel',
    breweryID: 13,
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 14.8,
    tastingNotes: [
      'bourbon',
      'vanilla',
      'toffee',
      'coffee',
      'dark fruit',
      'chocolate'
      ],
    image: 'https://i.imgur.com/2rook8H.jpg'
  },
  {
    name: 'Mr. Sandman',
    breweryID: 13,
    style: [
      'Imperial Stout'
      ],
    abv: 13.5,
    tastingNotes: [
      'dark chocolate',
      'dark cherry',
      'raspberry',
      'roasted',
      'molasses'
      ],
    image: 'https://i.imgur.com/V2vIiMy.jpg'
  },
  {
    name: 'Rudie',
    breweryID: 14,
    style: [
      'IPA',
      'Session IPA'
      ],
    abv: 4.5,
    tastingNotes: [
      'orange',
      'caramel',
      'tropical'
      ],
    image: 'https://i.imgur.com/Y1I6lC5.jpg'
  },
  {
    name: 'Juicy Banger',
    breweryID: 15,
    style: [
      'American IPA'
      ],
    abv: 7.5,
    tastingNotes: [
      'hoppy',
      'toasty',
      'tropical'
      ],
    image: 'https://i.imgur.com/XnoFmjf.jpg'
  },
  {
    name: 'Space Wrangler',
    breweryID: 15,
    style: [
      'American IPA'
      ],
    abv: 7.3,
    tastingNotes: [
      'honey',
      'hoppy',
      'juicy'
      ],
    image: 'https://i.imgur.com/NZC2XIK.jpg'
  },
  {
    name: 'Christmas Ale',
    breweryID: 16,
    style: [
      'Belgian Strong Ale',
      'Belgian Dark Strong Ale',
      'American Christmas Ale'
      ],
    abv: 8.3,
    tastingNotes: [
      'baking spice',
      'cinnamon',
      'clove',
      'dried fruit'
      ],
    image: 'https://i.imgur.com/Qf5ys3E.jpg'
  },
  {
    name: 'Juicy Bits',
    breweryID: 17,
    style: [
      'New England IPA',
      'IPA'
      ],
    abv: 6.5,
    tastingNotes: [
      'sweet',
      'orange',
      'hazy'
      ],
    image: 'https://i.imgur.com/39Wjl2i.jpg'
  },
  {
    name: 'Mocha Achromatic',
    breweryID: 17,
    style: [
      'Coffee Stout',
      'Stout'
      ],
    abv: 9.5,
    tastingNotes: [
      'roasted',
      'coffee',
      'smokey',
      'chocolate',
      'currant'
      ],
    image: 'https://i.imgur.com/UrVaRQZ.jpg'
  },
  {
    name: 'Peppermint Mocha Achromatic',
    breweryID: 17,
    style: [
      'Stout',
      'Coffee Stout'
      ],
    abv: 9.5,
    tastingNotes: [
      'mint',
      'chocolate',
      'coffee'
      ],
    image: 'https://i.imgur.com/Y0cqrCR.jpg'
  }
];

const coloradoBreweries = [
  {
    name: 'Avery Brewing Co.',
    breweryID: 1,
  },
  {
    name: 'Cerebral Brewing',
    breweryID: 2,
  },
  {
    name: 'Crooked Stave',
    breweryID: 3,
  },
  {
    name: 'Dry Dock Brewing Co.',
    breweryID: 4,
  },
  {
    name: 'Epic Brewing Co.',
    breweryID: 5,
  },
  {
    name: 'Fiction Beer Co.',
    breweryID: 6,
  },
  {
    name: 'Funkwerks',
    breweryID: 7,
  },
  {
    name: 'Great Divide',
    breweryID: 8,
  },
  {
    name: 'Left Hand',
    breweryID: 9,
  },
  {
    name: 'New Belgium',
    breweryID: 10,
  },
  {
    name: 'Odell Brewing Co.',
    breweryID: 11,
  },
  {
    name: 'Oskar Blues',
    breweryID: 12,
  },
  {
    name: 'River North',
    breweryID: 13,
  },
  {
    name: 'Ska Brewing Co.',
    breweryID: 14,
  },
  {
    name: 'Station 26 Brewing Co.',
    breweryID: 15,
  },
  {
    name: 'Upslope',
    breweryID: 16,
  },
  {
    name: 'Weldwerks Brewing Co.',
    breweryID: 17,
  },
]

module.exports = {
  coloradoBeer,
  coloradoBreweries
}