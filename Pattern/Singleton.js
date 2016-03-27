 /*单例模式: 单例模式的定义是产生一个类的唯一实例，但js本身是一种“无类”语言。
 很多讲js设计模式的文章把{}当成一个单例来使用也勉强说得通。

在应用单例模式时，生成单例的类必须保证只有一个实例的存在，很多时候整个系统只需要拥有一个全局对象，
才有利于协调系统整体的行为。 比如在整个系统的配置文件中，配置数据有一个单例对象进行统一读取和修改，
其他对象需要配置数据的时候也统一通过该单例对象来获取配置数据，这样就可以简化复杂环境下的配置管理。
*/

// ES5:
/*var SingletonT1 = (function () {
    var instance;
    var Singleton = function() {}

    return {
        getInstance: function () {
            if (instance === undefined) {
                instance = new Singleton();
            }

            return instance;
        }
    };
})();

console.log(SingletonT1.getInstance());*/


// ES6:

import SingletonTest from './SingletonT1';

SingletonTest.sayHello();

SingletonTest.instance.name = 'Asher';

console.error(SingletonTest.instance.name);
