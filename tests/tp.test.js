const User = require('../class/User');
const Todolist = require('../class/Todolist');
const Item = require('../class/Item');
const EmailService = require('../class/EmailService');

describe('User', () => {
    // Email 
    it('should return true if email is well formated', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValidEmail();      
        expect(res).toBe(true);
    });
    it('should return false if email is not well formated', () => {
        const UserTest = new User('charles.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValidEmail();    
        expect(res).toBe(false);
    });
    it('should return false if email is empty', () => {
        const UserTest = new User('', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValidEmail();        
        expect(res).toBe(false);
    });
    it('should return false if email is null', () => {
        const UserTest = new User(null, 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValidEmail();
        expect(res).toBe(false);
    });

    // Lastname & Firstname
    it('should return true if lastname and firstname exist', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(true);
    });
    it('should return false if lastname exists but firstname is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', null, 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(false);
    });
    it('should return false if lastname is null but firstname exists', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', null, 'Charles', 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(false);
    });
    it('should return false if lastname and firstname are null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', null, null, 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(false);
    });
    it('should return false if lastname is empty but firstname exists', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', ' ', 'Charles', 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(false);
    });
    it('should return false if lastname exists and firstname is empty', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', ' ', 'Pa$$word', 24);
        const res = UserTest.existsFirstnameLastname();
        expect(res).toBe(false);
    });

    // Password
    it('should return true if password length is between 8 and 40', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', ' ', 'Pa$$word', 24);
        const res = UserTest.isValidPassword();
        expect(res).toBe(true);
    });
    it('should return false if password length lower than 8', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', ' ', 'less8', 24);
        const res = UserTest.isValidPassword();
        expect(res).toBe(false);
    });
    it('should return false if password length is greater than 40', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', ' ', 'Pa$$wordPa$$wordPa$$wordPa$$wordPa$$wordPa$$word', 24);
        const res = UserTest.isValidPassword();
        expect(res).toBe(false);
    });
    it('should return false if password is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', ' ', null, 24);
        const res = UserTest.isValidPassword();
        expect(res).toBe(false);
    });

    // Age
    it('should return true if age is greater than 13', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValid();
        expect(res).toBe(true);
    });
    it('should return true if age is equals 13', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 13);
        const res = UserTest.isValid();
        expect(res).toBe(true);
    });
    it('should return false if age is lower than 13', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 9);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });

    // User Validation
    it('should return true if all parameters are clean', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValid();
        expect(res).toBe(true);
    });
    it('should return false if email is null', () => {
        const UserTest = new User(null, 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });
    it('should return false if lastname is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', null, 'Charles', 'Pa$$word', 24);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });
    it('should return false if firstname is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', null, 'Pa$$word', 24);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });
    it('should return false if password is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', null, 24);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });
    it('should return false if age is null', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', null);
        const res = UserTest.isValid();
        expect(res).toBe(false);
    });

    // Todolist
    it('should return undefined if a todoList has been added to a User', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', null);
        const res = UserTest.addTodoList(UserTest);
        expect(res).toBeUndefined();
    });
    it('should return false if a User already has a todoList', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', null);
        UserTest.addTodoList(UserTest);
        const res = UserTest.addTodoList(UserTest);
        expect(res).toBe(false);
    });
})

describe('Todolist', () => {
    it('should return true if todolist length is between 0 and 10', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const Item1 = new Item('Item1', 'HeyGuysImItem1');
        const Item2 = new Item('Item2', 'HeyGuysImItem2');
        const todolist = new Todolist(UserTest);
        todolist.addItem(Item1);
        todolist.addItem(Item2);
        expect(todolist.canAddNewItem()).toBe(true);
    });
    it('should return true if todolist length is equal to 0', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        expect(todolist.canAddNewItem()).toBe(true);
    });
    it('should return false if todolist length is equal to 10', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        for (let index = 0; index < 10; index++) {
            todolist.addItem(new Item('Item1', 'HeyGuysImItem1'));
        }
        expect(todolist.canAddNewItem()).toBe(false);
    });
    it('should return false if item name is not unique', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        const Item1 = new Item('Item1', 'HeyGuysImItem1');
        const Item2 = new Item('Item1', 'HeyGuysImItem1');
        todolist.canAddItem(Item1);
        const res = todolist.isUniqueItem(Item2);
        expect(res).toBe(false)
    });
    it('should return true if item name is unique', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        const Item1 = new Item('Item1', 'HeyGuysImItem1');
        const Item2 = new Item('Item2', 'HeyGuysImItem2');
        todolist.canAddItem(Item1);
        const res = todolist.isUniqueItem(Item2);
        expect(res).toBe(true);
    })
    it('should return false if last item has been added less than 30 minutes ago', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        const Item1 = new Item('Item1', 'HeyGuysImItem1');
        todolist.canAddItem(Item1);
        const res = todolist.isInTimeItem();
        expect(res).toBe(false);
    })
    it('should return true if last item has been added more than 30 minutes ago', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        const Item1 = new Item('Item1', 'HeyGuysImItem1');
        const threshold = 31 * 60 * 60 * 1000;
        Item1.createdAt = Date.now() - threshold;
        todolist.canAddItem(Item1);
        const res = todolist.isInTimeItem();
        expect(res).toBe(true);
    })
    it('should return null if Item has not been added', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        for (let index = 0; index < 10; index++) {
            todolist.addItem(new Item('Item1', 'HeyGuysImItem1'));
        }
        const addedItem = todolist.canAddItem(new Item('Item1', 'HeyGuysImItem1'));
        expect(addedItem).toBe(null);
    });
    it('should return current item if added in todolist', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', 'Pa$$word', 24);
        const todolist = new Todolist(UserTest);
        const addedItem = todolist.canAddItem(new Item('Item1', 'HeyGuysImItem1'));
        expect(addedItem).toMatchObject(addedItem);
    });
})

describe('Email', () => {
    it('should return true if User is more than 18', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', null, 24);
        const Email = new EmailService();
        const res = Email.send(UserTest);
        expect(res).toBe(true)
    })
    it('should return false if User is less than 18', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', null, 14);
        const Email = new EmailService();
        const res = Email.send(UserTest);
        expect(res).toBe(false)
    })
    it('should return true if User is less equal 18', () => {
        const UserTest = new User('charles.vanhamme@gmail.com', 'Van Hamme', 'Charles', null, 18);
        const Email = new EmailService();
        const res = Email.send(UserTest);
        expect(res).toBe(true);
    })
})