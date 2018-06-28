/** syntax */
// Objects come in two forms: the declarative (literal) form and the con‐ structed form
// literal form
var myObj = {key: 'value'};
// constructed form
var myObj = new Object();
myObj.key = 'value';



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



/** type */
// primary types <- engine automatically coerces -> actual types
// string <-> String
// number <-> Number
// boolean <-> Boolean
// null
// undefined
// object <-> Object

//        Function
//        Array
//        Date
//        RegExp
//        Error
var strPrimitive = 'I am a string';
myprint(typeof strPrimitive); // 'string'
myprint(strPrimitive instanceof String); // false

var strObject = new String( 'I am a string');
myprint(typeof strObject); // 'object'
myprint(strObject instanceof String); // true
// inspect the object sub-type
myprint(Object.prototype.toString.call(strObject)); // [object String]

// null is sometimes referred to as an object type,
// but this misconception stems from a bug in the language that causes typeof null 
// to return the string "object" in‐ correctly (and confusingly). 
// In fact, null is its own primitive type
myprint(typeof null);// 'object'

// If you use any other value besides a string (primitive) as the property,
// it will first be con‐ verted to a string
var myObject = {true: 'true1', 3: 32, myObject: 'myObject3', aaa: 'aaa4'}
myprint(myObject['true']) // true1
myprint(myObject[true]) // true1
myprint(myObject['3']) // 32
myprint(myObject[3]) // 32
myprint(myObject['myObject']) // myObject3
myprint(myObject[myObject]) // undefined
myprint(myObject['aaa']) // aaa4
// myprint(myObject[aaa]) // aaa is not defined

// Computed Property Names
var prefix = 'foo'
var myObject = {
  [prefix + 'bar']: 'hello',
  [prefix + 'baz']: 'world'
}
myprint(myObject['foobar']); // hello
myprint(myObject['foobaz']); // world

// numeric indexing
var myArray = ['foo', 42, 'bar']
// could use an array as a plain key/value object, and never add any numeric indices
myArray.baz = 'baz'
myprint(myArray.length) // 3
myprint(myArray.baz) // baz
// if add a property to an array, but the property name looks like a number,
// it will end up instead as a numeric index
myArray['3'] = 'aaa3'
myprint(myArray.length) // 4
myprint(myArray[3]) // aaa3

// Property Descriptors
var myObject = {a: 2}
// nodejs: { value: 2, writable: true, enumerable: true, configurable: true } and js: [object Object]
myprint(Object.getOwnPropertyDescriptor(myObject, 'a'))

Object.defineProperty(myObject, 'b', {
  value: 5,
// controlled the value of a property can change or not
  writable: false, // not writable!
// changing configurable to false is a one-way action, and cannot be undone
// even if the property is already configurable:false,
// writable can always be changed from true to false without error, but not back to true if already false.
// configurable:false is prevent to use the delete operator to remove an existing property
  configurable: false, // 一旦设置为false将不能再使用defineProperty配置该值
// enuerable basically means will be included if the object’s properties are iterated through
  enumerable: true
})
myprint(myObject.a + ', ' + myObject.b) // 2, 5
myObject.b = 8
myprint(myObject.b) // 5
// if configurable: true after delete the value will been undefined
delete myObject.b
myprint(myObject.b) // 5
// delete is only used to remove object properties(which can be removed) directly from the objec
delete myObject
myprint(myObject.a)

// Prevent extensions
var myObject = {a: 15}
// prevent an object from having new properties added to it
Object.preventExtensions(myObject)
myObject.b = 3
myprint(myObject.a) // 15
myprint(myObject.b) // undefined

// Seal
// Object.seal(..) creates a “sealed” object, which means it takes an existing object and 
// essentially calls Object.preventExtensions(..) on it, but also marks all its existing 
// properties as configurable:false.
// So, not only can you not add any more properties, but you also cannot reconfigure or 
// delete any existing properties (though you can still modify their values).


// Freeze
// Object.freeze(..) creates a frozen object, which means it takes an existing object and 
// essentially calls Object.seal(..) on it, but it also marks all “data accessor” properties
// as writable:false, so that their values cannot be changed.
// it prevents any changes to the object or to any of its direct properties.
// (but the contents of any referenced other objects are unaffected, if you want 'deep freeze' 
// you can recursively iterating over all objects it references)


// Getters and Setters
var myObject = {
  // define a getter for `a`
  get a() {
    if (this._a) {
      return this._a
    } else {
      return 2
    }
  },
  // define a setter for `a`
  set a(val) {this._a = val}
}
Object.defineProperty(
  myObject, // target
  'b', // property name
  { // descriptor
    // define a getter for `b`
    get: function(){ return this.a * 2},
    // make sure `b` shows up as an object property
    enumerable: true
  }
)
myprint(myObject.a) // 2
myprint(myObject.b) // 4
myObject.a = 3
myprint(myObject.a) // 3

// Existence
var myObject = {a: 2}
// The in operator will check to see if the property is in the object,
// or if it exists at any higher level of the [[Prototype]] chain object traversal
myprint('a' in myObject) // true
myprint('b' in myObject) // false
// hasOwnProperty(..) checks to see if only myObject has the property or not,
// and will not consult the [[Proto type]] chain
myprint(myObject.hasOwnProperty('a')) // true
myprint(myObject.hasOwnProperty('b')) // false

// Enumeration
var myObject = {};
Object.defineProperty(myObject, 'a', {
  value: 2,
  enumerable: true // make `a` enumerable, as normal
})
Object.defineProperty(myObject, 'b', {
  value: 3,
  enumerable: false // make `b` NON-enumerable
})
myprint(myObject.b) // 3
myprint('b' in myObject) // true
myprint(myObject.hasOwnProperty('b')) // true

myprint(myObject.propertyIsEnumerable('a')) // true
myprint(myObject.propertyIsEnumerable('b')) // false

// Object.keys(..) returns an array of all enumerable properties
myprint(Object.keys(myObject)) // ['a']
// Object.getOwnPropertyNames(..) returns an array of all properties, enumerable or not
myprint(Object.getOwnPropertyNames(myObject)) // ['a', 'b']

for (var k in myObject) {  // a, 2
  myprint(k + ', ' + myObject[k])
}


// Iteration ES5
// 1. for..in iterates over the list of enumerable properties on an object (including its [[Prototype]] chain).
// 2. forEach(..) will iterate over all values in the array, and it ignores any callback return values.
// 3. every(..) keeps going until the end or the callback returns a false (or “falsy”) value.
// 4. some(..) keeps going until the end or the callback returns a true (or “truthy”) value
// 5. for..of(ES6) loop asks for an iterator object of the thing to be iterated, and the loop then
//   iterates over the successive return values from calling that iterator object’s next() method,
//   once for each loop iteration.
var myArray=[1, 2, 3]
var it = myArray[Symbol.iterator]()
myprint(it.next()) // nodejs: { value:1, done:false } js: [object Object]
myprint(it.next()) // { value:2, done:false }
myprint(it.next()) // { value:3, done:false }
myprint(it.next()) // { value: undefined, done: true }

var myObject = {a: 2, b: 3}
Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx=0;
    var ks = Object.keys(o)
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        }
      }
    }
  }
})
// iterate `myObject` manually
var it = myObject[Symbol.iterator]()
myprint(it.next()) // nodejs: { value:2, done:false } js [object Object]
myprint(it.next()) // { value:3, done:false }
myprint(it.next()) // { value:undefined, done:true }
// iterate `myObject` with `for..of`
for (var v of myObject) { // 2 3
  myprint(v)
}

// define “infinite” iterators that never “finish” and always return a new value
var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {value: Math.random()}
      }
    }
  }
}
var randoms_pool = []
for (var n of randoms) {
  randoms_pool.push(n)
  // myprint(n)
  // don't proceed unbounded!
  if (randoms_pool.length === 100)
    break
}

