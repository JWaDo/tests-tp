class Item {
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.createdAt = Date.now();
    }
}

module.exports = Item;