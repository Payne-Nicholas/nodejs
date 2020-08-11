//JavaScript语言中，生成实例对象的传统方法是通过构造函数。下面是一个很好的例子
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ')';
}

var p = new Point(1, 2);

console.log(p)

//ES6中提供了更接近传统语言的写法，引用了Class(类)这个概念，作为对象的模板。
//通过class关键字可以定义类。
//ES6的class可以看做一个语法糖，他的绝大部分功能，ES5都可以做到，
//新的class写法只是让对象原型的写法更加清晰，更像面向对象编程的语法而已。
//上面的代码用ES6的class改写如下
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x + ',' + this.y + ')';
//     }
// }

/** 
 ** 上面的代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造函数
 ** 而this关键字则代表实例对象。也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法
 **/

/** 
 ** Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，
 ** 前面不需要加上function这个关键字，直接把函数定义放进去就可以了。
 ** 另外，方法之间不需要逗号分隔，加了会报错
 ** ES6的类，完全可以看做构造函数的另一种写法。
 **/

class Foo {
    //  ...
}
console.log(typeof Foo);
const result = (Foo === Foo.prototype.constructor);
console.log(result);