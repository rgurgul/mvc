var ViewList = function (collection, container) {
    EventTarget.call(this);

    // model
    this.collection = collection;
    collection.addListener('itemsChanged', this.renderList.bind(this));

    // UI
    this.createUI(container);
    this.btnNew.addEventListener('click', function () {
        this.fire('newItem');
    }.bind(this));
    this.btnDelete.addEventListener('click', function () {
        this.output.innerText = '';
        this.fire('removeItem', this.list.selectedIndex);
    }.bind(this));
};

ViewList.prototype = Object.create(EventTarget.prototype);

ViewList.prototype.createUI = function (container) {
    this.output = Helpers.createEl('div', container, {classList: 'col-lg-12'});
    var listBox = Helpers.createEl('div', container, {classList: 'col-lg-9'});
    this.list = Helpers.createEl('select', listBox, {classList: 'form-control list', size: 15});
    var btnBox = Helpers.createEl('div', container, {classList: 'col-lg-3'});
    this.btnNew = Helpers.createEl('button', btnBox, {classList: 'btn btn-default btn-block btn-new', innerHTML: 'add'});
    this.btnDelete = Helpers.createEl('button', btnBox, {classList: 'btn btn-default btn-block btn-delete', innerHTML: 'delete'});
};

ViewList.prototype.renderList = function () {
    this.list.options.length = 0;
    var items = this.collection.getItems();
    items.forEach(function (val, key) {
        var opt = new Option(val.name, key);
        opt.addEventListener('click', function () {
            this.output.innerText = val.phone;
        }.bind(this));
        this.list.options[key] = opt;
    }, this);
};