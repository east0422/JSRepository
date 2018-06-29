/** customize log function to print message into console */
function myprint(message) {
  if (this && this.process && this.process['argv0'] && this.process['argv0'].includes('node')) {
    // nodejs: /usr/local/bin/node
    console.log(message);
  } else {
    // javascript: /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc
    debug(message);
  }
}



/** Prototype */
var anotherObject = {a: 2}
// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject)
myprint(myObject.a) // 2
myprint(anotherObject.hasOwnProperty('a')) // true
myprint(myObject.hasOwnProperty('a')) // false
// The result is [[Get]] looking up a property via [[Prototype]] to get the current value 2 from
// anotherObject.a, incrementing the value by one, then [[Put]] assigning the 3 value to a new
// shadowed property a on myObject.
myObject.a++
myprint(anotherObject.a) // 2
myprint(myObject.a) // 3
myprint(myObject.hasOwnProperty('a')) // true
// If you wanted to increment anotherObject.a, the only proper way is anotherObject.a++
anotherObject.a++
myprint(anotherObject.a) // 3
myprint(myObject.a) // 3


// Class Functions 
myprint('Class Functions--------')
function Foo() {
  // ...
}
var a = new Foo()
// each object created from calling new Foo() will end up (somewhat arbitrarily)
// [[Prototype]]-linked to this “Foo.prototype” object.
myprint(Object.getPrototypeOf(a) === Foo.prototype) // true
// The Foo.prototype object by default gets a public, nonenumerable property 
// called .constructor, and this property is a reference back to the function 
// (Foo in this case) that the object is associated with
myprint(Foo.prototype.constructor === Foo) // true
myprint(a.constructor === Foo) // true


// Constructor redux
myprint('Constructor redux--------')
function Foo() { /* .. */ }
Foo.prototype = { /* .. */ } // create a new prototype object
var a1 = new Foo()
myprint(a1.constructor === Foo) // false
myprint(a1.constructor === Object) // true

// Need to properly "fix" the missing `.constructor`
// property on the new object serving as `Foo.prototype`.
Object.defineProperty(Foo.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo // point `.constructor` at `Foo`
})
myprint(a1.constructor === Foo) // true
myprint(a1.constructor === Object) // false


// (Prototypal) Inheritance
function Foo(name) {
  this.name = name
}
Foo.prototype.myName = function() {
  return this.name
}
function Bar(name, label) {
  Foo.call(this, name)
  this.label = label
}
// Bar.prototype = Foo.prototype doesn’t create a new object for Bar.prototype to be linked to
// make a new `Bar.prototype` linked to `Foo.prototype`
Bar.prototype = Object.create(Foo.prototype)
// Beware! Now `Bar.prototype.constructor` is gone, and might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Bar.prototype.myLabel = function() {
  return this.label
}
var a = new Bar('a', 'obj a')
myprint(a.myName()) // 'a'
myprint(a.myLabel()) // 'obj a'


// Object.create() polyfill
var anotherObject = {a: 2}
var myObject = Object.create(anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4
  }
})
myprint(myObject.hasOwnProperty('a')) // false
myprint(myObject.hasOwnProperty('b')) // true
myprint(myObject.hasOwnProperty('c')) // true
myprint(myObject.a) // 2
myprint(myObject.b) // 3
myprint(myObject.c) // 4


