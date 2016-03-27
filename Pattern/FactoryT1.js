/*
工厂模式主要是为创建对象提供过渡接口，以便将创建对象的具体过程屏蔽隔离起来，达到提高灵活性的目的。 
工厂模式可以分为三类： 

1）简单工厂模式（Simple Factory） 
2）工厂方法模式（Factory Method） 
3）抽象工厂模式（Abstract Factory)

区别 
简单工厂
简单工厂模式的工厂类一般是使用静态方法，通过接收的参数的不同来返回不同的对象实例。
不修改代码的话，是无法扩展的。

*/
/*
	

class SimpleFactory {
	static createCar(type) {
		switch(type) {
			case 'A':
				return new CarA();
			case 'B':
				return new CarB();
		}
		
	}
}

SimpleFactory.createCar('B').run();*/

/*
工厂方法
工厂方法是针对每一种产品提供一个工厂类。通过不同的工厂实例来创建不同的产品实例。
在同一等级结构中，支持增加任意产品。
*/
/*
class CarFactory {
	createCar() {
		console.error('Please inplement this factory.');
	}
}

class Car {
	getBrand() {}
}

class BMW extends Car {
	constructor(brand) {
		super();
		this._brand = brand;
	}

	getBrand() {
		console.log('BMW');
	}
}

class Audi extends Car {
	constructor(brand) {
		super();
		this._brand = brand;
	}

	getBrand() {
		console.log('Audi');
	}
}

class BMWFactory extends CarFactory {
	createCar() {
		console.log('Create a BMW......');
		return new BMW("BMW");
	}
}

class AudiFactory extends CarFactory {
	createCar() {
		console.log('create an Audi......');
		return new Audi();
	}
}

new BMWFactory().createCar().getBrand();*/

/*
抽象工厂
抽象工厂是应对产品族概念的。比如说，每个汽车公司可能要同时生产轿车，货车，客车，那么每一个工厂都要有创建轿车，货车和客车的方法。
应对产品族概念而生，增加新的产品线很容易，但是无法增加新的产品。
*/

/*
class CarFactory {
	createManualTransmission() {
		console.error('Please inplement this factory.');
	}

	createAutomaticTransmission() {
		console.error('Please inplement this factory.');
	}
}

class Car {
	getBrand() {}
}

class BMW extends Car {
	constructor(brand) {
		super();
		this._brand = brand;
	}

	getBrand() {
		console.log('BMW');
	}
}

class Audi extends Car {
	constructor(brand) {
		super();
		this._brand = brand;
	}

	getBrand() {
		console.log('Audi');
	}
}

class BMWFactory extends CarFactory {
	createManualTransmission() {
		console.log('Create a manual transmission BMW......');
		return new BMW("BMW");
	}

	createAutomaticTransmission() {
		console.log('Create a automatic transmission BWM......');
		return new BWM("BWM");
	}
}

class AudiFactory extends CarFactory {
	createManualTransmission() {
		console.log('Create a manual transmission Audi......');
		return new Audi("Audi");
	}

	createAutomaticTransmission() {
		console.log('Create a automatic transmission Audi......');
		return new Audi("Audi");
	}
}

new BMWFactory().createManualTransmission().getBrand();*/
	