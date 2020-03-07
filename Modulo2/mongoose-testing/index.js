const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', {name: String, age: Number});


mongoose.connect('mongodb://localhost:27017/test', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  let promises = [];

  for (let i = 0; i < 5; i++) {
    const kitty = new Cat({name: 'Zilawddjian'+ i});
    kitty.age = 23;
    promises.push(kitty.save());
  }
  return Promise.all(promises);

}).then(saved => {
  console.log("saved", saved);

  return Cat.find({}, {name:1, _id:0});
}).then(students => {
  console.log('students', students);
  return 'done';
}).then(str => console.log(str)
).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('siempre se ejecuta');
});
