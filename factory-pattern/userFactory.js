const Employee = require('./Employee');
const Manager = require('./Manager');

function userFactory(type, name, age) {
    if(type === 'employee') {
        return new Employee(name, age);
    }
    else {
        return new Manager(name, age);
    }
}

module.exports = userFactory;
