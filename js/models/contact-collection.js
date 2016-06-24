var ContactCollection = function (data) {
    EventTarget.apply(this);
    this.items = data;
};

ContactCollection.prototype = Object.create(EventTarget.prototype);

ContactCollection.prototype.getItems = function () {
    return this.items;
};
ContactCollection.prototype.addItem = function (item) {
    this.items.push(item);
    this.fire('itemsChanged', this.items);
};
ContactCollection.prototype.removeItem = function (index) {
    this.items.splice(index, 1);
    this.fire('itemsChanged', this.items);
};