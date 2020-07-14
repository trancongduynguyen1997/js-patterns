const personBuilder = require('./personBuilder');

let alex = personBuilder('Alex').makeEmployee().makeManager().build();

console.log(alex.toString());