const Person = require('./Person');

class personBuilder {
    constructor(name) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this; // to chain and add other function
    }

    makeManager(hour = 40) {
        this.isManager = true;
        this.hour = hour;
        return this;
    }

    withSalary(salary = 100) {
        this.salary = salary;
        return this;
    }

    withTodoList(list = []) {
        this.todoList = list;
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = personBuilder;