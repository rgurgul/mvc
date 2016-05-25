var Model = function (data) {
    Helpers.apply(this);
    this.items = data;
};

Model.prototype = Object.create(Helpers.prototype);

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