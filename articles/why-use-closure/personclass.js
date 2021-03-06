var sys = require('sys');

// Define the constructor
function Person(name, age) {

  // Store the message in internal state
  this.message = name + ", who is " + age + " years old, says hi!";

};

// Define a sync method
Person.prototype.greet = function greet() {
  sys.puts(this.message);
};

// Define a method with async internals
Person.prototype.slowGreet = function slowGreet() {
  var self = this; // Use a closure to preserve `this`
  setTimeout(function () {
    sys.puts(self.message);
  }, 1000);
};

// Export this file as a module
module.exports = Person;
