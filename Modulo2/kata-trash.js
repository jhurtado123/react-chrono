const trash = [
  { name: 'Pizza Box', material: 'paper', dirty: true },
  { name: 'Coke Can', material: 'metal', dirty: false },
  { name: 'Plastic Bag', material: 'plastic', dirty: false },
  { name: 'Moldy Food', material: 'generic', dirty: true },
  { name: 'Cardboard', material: 'paper', dirty: false },
  { name: 'Detergent Container', material: 'plastic', dirty: false },
  { name: 'Wine Bottle', material: 'glass', dirty: false },
  { name: 'Pickle Jar', material: 'glass', dirty: false },
  { name: 'Newspaper', material: 'paper', dirty: false },
  { name: 'Magazine', material: 'paper', dirty: false },
  { name: 'Tree Leaves', material: 'generic', dirty: false },
  { name: 'Beer Bottle', material: 'glass', dirty: false },
  { name: 'Beer Bottle', material: 'paper', dirty: false },
  { name: 'Tuna Can', material: 'metal', dirty: true },
  { name: 'Sausage Can', material: 'metal', dirty: false },
  { name: 'Milk Carton', material: 'plastic', dirty: false },
  { name: 'Cereal Box', material: 'paper', dirty: false },
  { name: 'Juice Pack', material: 'plastic', dirty: false },
  { name: 'Cut Grass', material: 'generic', dirty: false },
  { name: 'Water Bottle', material: 'plastic', dirty: false }
];

const binColorMap = {
  paper: 'blue',
  plastic: 'yellow',
  metal: 'yellow',
  glass: 'green',
  generic: 'black'
};

const trashBins = {
  blue: [],
  yellow: [],
  green: [],
  black: []
};

trash.forEach(element => {
  const binColorOfElement = element.dirty ? binColorMap['generic'] : binColorMap[element.material];
  trashBins[binColorOfElement].push(element);
});

console.log(trashBins);