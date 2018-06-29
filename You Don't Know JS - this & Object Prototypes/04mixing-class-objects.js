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


/** class constructor */
myprint('Class constructor--------')
class CoolGuy {
  constructor(trick) {
    this.specialTrick = trick
  }
  showOff() {
    myprint('Here is my trick: ' + this.specialTrick)
  }
}
var Joe = new CoolGuy('jumping rope')
Joe.showOff() // Here is my trick: jumping rope



/** class inheritance */
myprint('Class Inheritance--------')
class Vehicle {
  constructor() {
    this.engines = 1
  }
  ignition() {
    myprint('Turning on my engine.')
  }
  drive() {
    this.ignition()
    myprint('Steering and moving forward!')
  }
}
var myVehicle = new Vehicle()
myprint(myVehicle.engines) // 1
myVehicle.ignition() // Turning on my engine.
myVehicle.drive() // Turning on my engine. Steering and moving forward!

myprint('-----------')
class Car extends Vehicle {
  constructor () {
    super()
    this.wheels = 4
  }
  drive() {
    super.drive()
    myprint('Rolling on all ' + this.wheels + ' wheels!')
  }
}
var myCar = new Car()
myprint(myCar.engines) // 1
myprint(myCar.wheels) // 4
myCar.drive() // Turning on my engine. Steering and moving forward! Rolling on all 4 wheels!

myprint('-----------')
class SpeedBoat extends Vehicle {
  constructor () {
    super()
    this.engines = 2
  }
  ignition() {
    myprint('Turning on my ' + this.engines + ' engines.')
  }
  pilot() {
    myprint('Speeding through the water with ease!')
    super.drive()
  }
}

var mySpeedBoat = new SpeedBoat()
myprint(mySpeedBoat.engines) // 2
mySpeedBoat.ignition() // Turning on my 2 engines.
mySpeedBoat.pilot() // Speeding through the water with ease! Turning on my 2 engines. Steering and moving forward!



/** Mixins */
// Explicit Mixins
// vastly simplified `mixin(..)` example:
myprint('Explicit Mixins-------')
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // only copy if not already present
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key]
    }
  }
  return targetObj
}
var Vehicle2 = {
  engines: 1,
  ignition: function() {
    myprint('Turning on my engine.')
  },
  drive: function() {
    this.ignition()
    myprint('Steering and moving forward!')
  }
}
var Car2 = mixin(Vehicle2, {
  wheels: 4,
  drive: function() {
    // Vehicle.drive(), the this binding for that function call would be the Vehicle object instead of the Car object
    // .call(this) to ensure that drive() is executed in the context of the Car object.
    Vehicle2.drive.call(this)
    myprint('Rolling on all ' + this.wheels + ' wheels!')
  }
})
myprint(Car2.engines) // 1
myprint(Car2.wheels) // 4
Car2.ignition()  // Turning on my engine.
Car2.drive() // Turning on my engine. Steering and moving forward! Rolling on all 4 wheels!


// Parasitic inheritance
myprint('------------')
function Vehicle3() {
  this.engines = 1
}
Vehicle3.prototype.ignition = function() {
  myprint('Turning on my engine.')
}
Vehicle3.prototype.drive = function() {
  this.ignition()
  myprint('Steering and moving forward!')
}

function Car3() {
  var car = new Vehicle3()
  car.wheels = 4
  var vehDrive = car.drive
  car.drive = function() {
    vehDrive.call(this)
    myprint('Rolling on all ' + this.wheels + ' wheels!')
  }
  return car
}
var myCar3 = new Car3()
myprint(myCar3.engines + ', ' + myCar3.wheels) // 1, 4
myCar3.drive()  // Turning on my engine. Steering and moving forward! Rolling on all 4 wheels!

