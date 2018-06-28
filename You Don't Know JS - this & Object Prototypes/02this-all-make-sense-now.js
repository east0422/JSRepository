// call-site: the location in code where a function is called (not where it’s declared)
// call-stack: the stack of functions that have been called to get us to the current moment in execution

// summarize the rules for determining this from a function call’s call-site, in their order of precedence. Ask these questions in this order, and stop when the first rule applies.
/**
1. Is the function called with new (new binding)? If so, this is the newly constructed object.
  var bar = new foo()
2. Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
  var bar = foo.call( obj2 )
3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
  var bar = obj1.foo()
4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
  var bar = foo()
That’s it. That’s all it takes to understand the rules of this binding for normal function calls.
*/

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

/** call-site and call-stack */
function func1() {
  // call-stack is : 'func1'
  // so, our call-site is in the global scope
  myprint('func1');
  func2(); // call-site for 'func2'
}

function func2() {
  // call-stack is: 'func1' -> 'func2'
  // so, our call-site is in 'func1'
  myprint('func2');
  func3(); // call-site for 'func3'
}

function func3() {
  // call-stack is: 'func1' -> 'func2' -> 'func3'
  // so, our call-site is in 'func2'
  myprint('func3');
}

func1(); // call-site for 'func1'



/** strict mode and property for this in function */
function foo() {
  // 'use strict' // in this mode this are undefined both nodejs and js
  myprint(this.a);
}
var a = 2;
foo(); // undefined in nodejs and 2 in js 

var obj1 = {
  a: 123,
  foo2: foo,
}
// obj1 is the this for the foo() call, this.a is synonymous with obj1.a
obj1.foo2(); // 123

var obj2 = {
  a: 42,
  foo: foo
};
var obj3 = {
  a: 2,
  obj2: obj2
};
// Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj
foo.call(obj2); // 42
foo.call(obj3); // 2
obj3.obj2.foo(); // 42

var obj4 = {
  a: 4,
  foo: foo
};
var bar = obj4.foo; // function reference/alias!
var a = 'oops, global'; // `a` also property on global object
bar(); // 'oops, global' in js and undefined in nodejs

function doFoo(fn) {
  // `fn` is just another reference to `foo`
  fn(); // <-- call-site!
}
var obj5 = {
  a: 5,
  foo: foo
};
doFoo(obj5.foo ); // 'oops, global' in js and undefined in nodejs

var obj6 = {a: 6};
var bar2 = function () {
  foo.call(obj6);
}
bar2(); // 6
// setTimeout(bar2, 1); // 6 in nodejs but Can't find variable: setTimeout in js
// bar2.call(window); // window is not defined in both nodejs and js



/**  */
function foo7(something) {
  myprint(this.a + ',' + something);
  return this.a + something;
}
var obj7 = {a: 5};
var bar7 = function() {
  return foo7.apply(obj7, arguments);
  // return foo7.apply(obj7, args); // args is not defined
  // return foo7.apply(obj7, [4, 8]); // 5,4 /n 9
};
var b = bar7(7); // 5,7
myprint(b); // 12


function foo8(el) {
  myprint(el + ',' + this.id);
}
var obj8 = {id: 'awesome'};
// use `obj8` as `this` for `foo8(..)` calls
[1, 2, 3].forEach( foo8, obj8 ); // 1,awesome 2,awesome 3,awesome



/** new */
/**
In JS, constructors are just functions that happen to be called with the new operator in front of them. They are not attached to classes, nor are they instantiating a class. They are not even special types of functions. They’re just regular functions that are, in essence, hijacked by the use of new in their invocation
*/
// When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:
// 1. A brand new object is created (aka constructed) out of thin air.
// 2. The newly constructed object is [[Prototype]]-linked.
// 3. The newly constructed object is set as the this binding for that function call.
// 4. Unless the function returns its own alternate object, the newinvoked function call will automatically return the newly constructed object.
function foo9(para9) {
  this.para9 = para9;
}
var bar9 = new foo9(9);
myprint(bar9.para9); // 9

var obj11 = {foo9: foo9}; 
var obj12 = {};
obj11.foo9(11);
myprint(obj11.para9); // 11
obj11.foo9.call(obj12, 12);
myprint(obj12.para9); // 12

var bar10 = new obj11.foo9(100);
myprint(obj11.para9); // 11
myprint(bar10.para9); // 100

function foo10(p1, p2) {
  this.val = p1 + p2;
}
// using `null` here because we don't care about the `this` hard-binding in this scenario, and it will be overridden by the `new` call anyway!
var bar = foo10.bind(null, 'p11');
var baz = new bar('p22');
myprint(baz.val); // p11p22



/** ignore this */
// If you pass null or undefined as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation:
function foo11() {
  myprint(this.abc);
}
var abc = 2;
foo11.call( null ); // 2 in js and undefined in nodejs

function foo12(a, b) {
  myprint('a:' + a + ', b:' + b);
}
// spreading out array as parameters
foo12.apply(null, [2, 3]); // a:2, b:3
// currying with `bind(..)`
var bar = foo12.bind(null, 8);
bar(10); // a:8, b:10

// the easiest way to set it up as totally empty is Object.create(null). 
// Object.create(null) is similar to { }, but without the delegation to Object.prototype, so it’s “more empty” than just {}
var ø = Object.create(null);
// spreading out array as parameters
foo12.apply(ø, [1, 7] ); // a:1, b:7
// currying with `bind(..)`
var bar = foo12.bind(ø, 5);
bar(6); // a:5, b:6

function foo13() {
  myprint(this.a);
}
var a = 5;
var o = {a: 3, foo: foo13};
var p = {a: 4};
o.foo(); // 3
// assign o function foo to p foo and called
(p.foo = o.foo)(); // 5 in js and undefined in nodejs



/**  */
function foo14() {
  // return an arrow function
  return (a) => {
    // `this` here is lexically inherited from `foo14()`
    myprint(this.a);
  };
}
var obj1 = {a: 2};
var obj2 = {a: 3};
var bar = foo14.call(obj1);
bar.call(obj2); // 2, not 3!

/**
  Normal functions abide by the four rules. But ES6 introduces a special kind of function that does not use these rules: the arrow-function
*/
function foo15() {
  var self = this;
  setTimeout(() => {
    // `this` here is lexically inherited from `foo15()`
    myprint(this.a);
    myprint(self.a);
  }, 100);
}
var obj = {a: 8};
foo15.call(obj); // 8 8
