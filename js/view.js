var View = function (model, controls) {
    EventTarget.call(this);
    this.model = model;
    this.controls = controls;

    model.addListener('itemsChanged', this.renderView.bind(this));

    this.controls.btnAdd.addEventListener('click', function () {
        this.fire('addItem');
    }.bind(this));

    this.controls.btnDelete.addEventListener('click', function () {
        this.fire('removeItem', this.controls.list.selectedIndex);
    }.bind(this));
};

View.prototype = Object.create(EventTarget.prototype);

View.prototype.renderView = function () {
    this.controls.list.options.length = 0;
    var items = this.model.getItems();
    items.forEach(function (val, key) {
        this.controls.list.options[key] = new Option(val, key);
    }, this);
};