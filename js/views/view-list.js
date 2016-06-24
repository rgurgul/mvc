var ViewList = function (container) {
    EventTarget.call(this);
    this.createUI(container);
};

ViewList.prototype = Object.create(EventTarget.prototype);

ViewList.prototype.createUI = function (container) {
    var box = Helpers.createEl('div', container, {classList: 'row'});
    var listBox = Helpers.createEl('div', box, {classList: 'col-xs-9'});
    this.list = Helpers.createEl('select', listBox, {classList: 'form-control list', size: 15});
    var btnBox = Helpers.createEl('div', box, {classList: 'col-xs-3'});
    this.output = Helpers.createEl('input', btnBox, {className: 'form-control', name: 'phone'});
    var btnNew = Helpers.createEl('button', btnBox, {classList: 'btn btn-block btn-new', innerHTML: 'add'});
    var btnDelete = Helpers.createEl('button', btnBox, {classList: 'btn btn-block btn-delete', innerHTML: 'delete'});

    // UI events
    btnNew.addEventListener('click', function () {
        this.output.value = '';
        this.fire('newItem');
    }.bind(this));
    btnDelete.addEventListener('click', function () {
        this.output.value = '';
        this.fire('removeItem', this.list.selectedIndex);
    }.bind(this));
    this.output.addEventListener('input', function (evt) {
        this.fire('updateItem', this.list.selectedIndex, evt.target.value);
    }.bind(this));
};

ViewList.prototype.renderList = function (collection) {
    this.list.options.length = 0;
    collection.forEach(function (val, key) {
        var opt = new Option(val.name, key);
        opt.addEventListener('click', function () {
            this.output.value = val.phone;
        }.bind(this));
        this.list.options[key] = opt;
    }, this);
};