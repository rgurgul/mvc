var Controller = function (model, view) {
    this.model = model;
    view.addListener('addItem', this.addItem.bind(this));
    view.addListener('removeItem', this.removeItem.bind(this));
};

Controller.prototype = {
    addItem: function () {
        var newItem = window.prompt('product name');
        if(newItem) {
            this.model.addItem(newItem);
        }
    },
    removeItem: function (index) {
        index > -1 && this.model.removeItem(index);
    }
};