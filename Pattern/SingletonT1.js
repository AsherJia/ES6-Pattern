let singleton = Symbol();
let singletonEnforcer = Symbol();

class SingletonTest {

  constructor(enforcer) {
    if(enforcer != singletonEnforcer) throw "Cannot construct singleton";
  }

  set name(name) {
  	console.log('set name.')
  	this._name = name;
  }

  get name() {
  	console.error('get name.');
  	return this._name;
  }

  static get instance() {
    if(!this[singleton]) {
      this[singleton] = new SingletonTest(singletonEnforcer);
    }
    return this[singleton];
  }

  static sayHello() {
  	console.log("Singleton pattern");
  }
}

export default SingletonTest