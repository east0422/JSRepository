var lili = {name: 'lili'};
var lilei = {name: 'lilei'};

function toUpper() {
  // console.log('this:' + this);
  return this.name.toUpperCase();
}

function sayHello() {
  var hello = 'Hello, I am '  + toUpper.call(this);
  console.log(hello);
}

console.log(toUpper.call(lili)); // LILI
console.log(toUpper.call(lilei)); // LILEI
sayHello.call(lili); // Hello, I am LILI
sayHello.call(lilei); // Hello, I am LILEI

// TypeError: Cannot read property 'toUpperCase' of undefined
// console.log('aaa:' + toUpper.call('aaa'));
// sayHello(lili);


function toUpper2(context) {
  // console.log('context:' + context);
  return context.name.toUpperCase();
}

function sayHello2(context) {
  var hello = 'Hello2, I am '  + toUpper2(context);
  console.log(hello);
}

console.log(toUpper2(lili)); // LILI
sayHello2(lilei); // Hello2, I am LILEI

// TypeError: Cannot read property 'name' of undefined
// console.log('lili toUpper: ' + toUpper2.call(lili));
// sayHello2.call(lilei);


function foo(num) {
  console.log('foo:' + num);
  // console.log('this: ' + this);
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

console.log('this.count: ' + this.count); // this.count: 1
console.log('foo.count: ' + foo.count); // foo.count: 4


