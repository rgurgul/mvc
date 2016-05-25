var Model = function (data) {
    EventTarget.apply(this);
    this.items = data;
};

Model.prototype = Object.create(EventTarget.prototype);

Model.prototype.getItems = function () {
    return this.items;
};
Model.prototype.addItem = function (item) {
    this.items.push(item);
    this.fire('itemsChanged');
};
Model.prototype.removeItem = function (index) {
    this.items.splice(index, 1);
    this.fire('itemsChanged');
};