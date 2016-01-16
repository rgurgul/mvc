var Controller = function (model, view) {
    this.model = model;
    this.view = view;
    view.addListener('addItem', this.addItem.bind(this));
    view.addListener('removeItem', this.removeItem.bind(this));
    view.addListener('listChanged', this.listChanged.bind(this));
};

Controller.prototype = {
    addItem: function () {
        var newItem = window.prompt('name and phone - separated by space. eg. joe 949494949');
        if (newItem) {
            var obj = newItem.split(' ');
            this.model.addItem({name: obj[0], phone: obj[1]});
        }
    },
    removeItem: function (index) {
        index > -1 && this.model.removeItem(index);
        this.view.controls.output.innerText = '';
    },
    listChanged: function (index) {
        this.model.setSelected(index);
    }
};