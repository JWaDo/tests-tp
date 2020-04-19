const EmailService = require('./EmailService');

class Todolist {
    constructor(User) {
        this.User = User
        this.items = [];
    }

    canAddNewItem() {
        return this.items.length >= 0
            && this.items.length < 10;
    }

    addItem(Item) {
        const mail = new EmailService();
        mail.send(this.User);
        this.items.push(Item);
        return Item;
    }

    isUniqueItem(Item) {
        let isUnique = true;
        this.items.map(item => {
            if(item.name === Item.name) {
                isUnique = false;
            }
        })
        return isUnique;
    }

    isInTimeItem() {
        const length = this.items.length;
        if(length === 0) return true;
        const lastItem = this.items[length - 1];
        const diffTime = Date.now() - lastItem.createdAt;
        const threshold = 30 * 60 * 60 * 1000;
        return threshold < diffTime;
    }
    
    canAddItem(Item) {
        if(this.canAddNewItem() && this.isUniqueItem(Item) && this.isInTimeItem()) {
            return this.addItem(Item);
        }
        return null;
    }

}

module.exports = Todolist;