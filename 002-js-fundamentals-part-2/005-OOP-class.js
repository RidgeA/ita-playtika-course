class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}

class Employee extends Person {

  // private
  #position;

  static staticProperty;

  constructor(name, position) {
    super(name);
    this.#position = position;
  }

  _method() {
    super.sayHi()
  }
}

const e = new Employee('name', 'position');
e.sayHi();
