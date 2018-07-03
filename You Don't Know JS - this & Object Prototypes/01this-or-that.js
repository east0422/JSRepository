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



/** this inner named function with no parameter and called pass parameter */
var lili = {name: 'lili'};
var lilei = {name: 'lilei'};

function toUpper() {
  // myprint('this:' + this);
  return this.name.toUpperCase();
}

function sayHello() {
  var hello = 'Hello, I am '  + toUpper.call(this);
  myprint(hello);
}

myprint(toUpper.call(lili)); // LILI
myprint(toUpper.call(lilei)); // LILEI
sayHello.call(lili); // Hello, I am LILI
sayHello.call(lilei); // Hello, I am LILEI

// TypeError: Cannot read property 'toUpperCase' of undefined
// myprint('aaa:' + toUpper.call('aaa'));
// sayHello(lili);



/** called named function with parameter */
function toUpper2(context) {
  // myprint('context:' + context);
  return context.name.toUpperCase();
}

function sayHello2(context) {
  var hello = 'Hello2, I am '  + toUpper2(context);
  myprint(hello);
}

myprint(toUpper2(lili)); // LILI
sayHello2(lilei); // Hello2, I am LILEI

// TypeError: Cannot read property 'name' of undefined
// myprint('lili toUpper: ' + toUpper2.call(lili));
// sayHello2.call(lilei);



/** this inner named function with parameter */
function foo(num) {
  myprint('foo:' + num);
  // myprint('this: ' + this);
  foo.count++;
  this.count++; // reference inside of the function, this is not in fact pointing at all to that function object, and so even though the property names are the same, the root objects are different, and confusion ensues
}

foo.count = 0; // When executes foo.count = 0, indeed it’s adding a property count to the function object foo
foo.aa = 10;
this.count = 1;
// ReferenceError: aa is not defined
// aa.count = 0;
for (var i = 0; i < 10; i++) { // foo:6 foo:7 foo:8 foo:9
  if (i > 5) {
    foo(i);
    // foo.call(foo, i); // this.count: 1 foo.count: 8
  }
}
myprint('this.count: ' + this.count); // this.count: 1
myprint('foo.count: ' + foo.count); // foo.count: 4



/** this inner anonymous function */
this.count = 2;
var that = this;
function foo2() {
  foo2.count2 = 4; // `foo2` refers to itself
  var _this = this;
  setTimeout(function() {
    // anonymous function (no name), cannot // refer to itself
    myprint(this.count); // undefined
    myprint(this.count2); // undefined
    myprint(_this.count); // NaN
    myprint(_this.count2); // undefined
    myprint(that.count); // 2
    myprint(that.count2); // undefined
    myprint(foo2.count2); // 4
  }, 5);
}

foo2();



/** this inner named function with no parameter */
var a = 1234;
function bar3() {
  myprint('bar3:' + this.a); // bar3:undefined
}

function foo3() {
  var a = 2;
  // this.bar3(); // TypeError: this.bar3 is not a function in nodejs but work well in js
  bar3();
  myprint(a); // 2
  myprint('foo3:' + this.a); // foo3:undefined
}

foo3();

