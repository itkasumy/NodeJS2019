const util = require('util')

function Parent() {
  this.name = 'Parent'
  this.sayHi = function () {
    console.log('Hello from ', this.name)
  }
}

Parent.prototype.sayHi = function () {
  console.log('Hello from => ', this.name)
}

function Child() {
  this.name = 'Child'
  this.score = {
    math: 99,
    English: 96
  }
}

util.inherits(Child, Parent)

const person = new Child()
person.sayHi()

/**
 * showHidden 是否显示隐藏属性
 * depth 对象的递归深度
 * color 是否显示颜色
 */
console.log(util.inspect(person, true, 4, true))
