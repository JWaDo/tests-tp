const Todolist = require ('./Todolist');

class User {
    constructor(email, lastname, firstname, password, age) {
        this.email = email;
        this.lastname = lastname;
        this.firstname = firstname;
        this.password = password;
        this.age = age;
        this.hasTodo = false;
        this.todoList = null;
    }

    existsFirstnameLastname() {
        return this.firstname !== null
            && this.lastname !== null
            && this.firstname.trim().length > 0 
            && this.lastname.trim().length > 0;
    }
    
    isValidEmail() {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(this.email).toLowerCase());
    }

    isValidPassword() {
        return this.password !== null
            && this.password.length >= 8 
            && this.password.length <= 40;
    }

    hasRequiredAge() {
        return this.age >= 13;
    }

    hasTodoList() {
        return this.hasTodo;
    }

    addTodoList(User) {
        if(this.hasTodoList()) return false;
        this.todoList = new Todolist(User);
        this.hasTodo = true;
    }

    isValid() {
        return this.existsFirstnameLastname()
            && this.isValidEmail()
            && this.isValidPassword()
            && this.hasRequiredAge()
    }
}

module.exports = User