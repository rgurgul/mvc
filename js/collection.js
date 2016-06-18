var Collection = function (data) {
    EventTarget.apply(this);
    this.items = data;
};

Collection.prototype = Object.create(EventTarget.prototype);

Collection.prototype.getItems = function () {
    return this.items;
};
Collection.prototype.addItem = function (item) {
    this.items.push(item);
    this.fire('itemsChanged');
};
Collection.prototype.removeItem = function (index) {
    this.items.splice(index, 1);
    this.fire('itemsChanged');
};