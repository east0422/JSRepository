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


// Delegation
Task = {
  setID: function(ID) {
    this.id = ID
  },
  outputID: function() {
   myprint(this.id)
 }
}
// make `XYZ` delegate to `Task`
XYZ = Object.create(Task)
XYZ.prepareTask = function(ID, Label) {
  this.setID(ID)
  this.label = Label
}
XYZ.outputTaskDetails = function() {
  this.outputID()
  myprint(this.label)
}

XYZ.prepareTask(8, 'xyzlabel') 
XYZ.outputTaskDetails() // 8 xyzlabel


/** Mental Model */
// OO style
function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function() {
  return 'I am ' + this.me
}
function Bar(who) {
  // call Foo with paramter who
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function() {
  myprint('Hello, ' + this.identify() + '.')
}
var b1 = new Bar('b1')
var b2 = new Bar('b2')
b1.speak() // Hello, I am b1.
b2.speak() // Hello, I am b2.


// OLOO-style(objects-linked-to-other-objects)
Foo = {
  init: function(who) {
    this.me = who
  },
  identify: function() {
    return 'I am ' + this.me
  }
}
Bar = Object.create(Foo)
Bar.speak = function() {
  myprint('Hello, ' + this.identify() + '.')
}
var b1 = Object.create(Bar)
b1.init('b11')
var b2 = Object.create(Bar)
b2.init('b12')
b1.speak()  // Hello, I am b11.
b2.speak()  // Hello, I am b12.

