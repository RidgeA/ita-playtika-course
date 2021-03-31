// prototype inheritance

function Person(name) {
  this.name = name;
  this.sayHello = () => {
    console.log(`Say Hello ${this.name}`);
  }
}

Person.prototype.sayHi = function (a, b, c) {
  console.log(`Hello ${this.name}`);
  console.log(a, b, c);
}

const p = new Person('Name');
p.sayHi();
// p -> Person -> Object -> null
// const f = p.sayHi;
// f();
// f.call({name: 'another'}, 1, 2, 3)
// f.apply({name: 'apply'}, [1, 2, 3])
// const f1 = f.bind({name:'bind'}, 1, 2)
// f1(3)

p.sayHello();
const hello = p.sayHello;
hello();

// function Employee(name, position) {
//   this.position = position
//   // call parent's constructor
//   Person.call(this, name)
// }
//
// // inherit all methods form the parent
// Employee.prototype = Object.create(Person.prototype)
//
// const e = new Employee('Name', 'Position');
// e.sayHi();
//
// // e -> Employee -> Person -> Object -> null
