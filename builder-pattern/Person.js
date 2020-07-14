class Person {
    constructor(builder) {
        this.isManager = builder.isManager;
        this.isEmployee = builder.isEmployee;
        this.todoList = builder.todoList || [];
        this.salary = builder.salary || 0;
        this.hour = builder.hour || 0;
    }

    toString() {
        return JSON.stringify(this);
    }
} 

module.exports = Person;