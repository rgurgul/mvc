function ViewNewItem(container) {
    Helpers.call(this);

    // UI
    this.controls = this.createUI(container);
    this.controls.btnAdd.addEventListener('click', function () {
        var result = {name: this.controls.name.value, phone: this.controls.phone.value};
        result.name && this.fire('addItem', result);
        this.el.classList = 'well hidden';
    }.bind(this));
}

ViewNewItem.prototype = Object.create(Helpers.prototype);

ViewNewItem.prototype.createUI = function (container) {
    var tpl = '<form class="well hidden">\
            <label>name:<input class="form-control" name="name" type="text" autofocus></label>\
            <label>phone:<input class="form-control" name="phone" type="number"></label>\
            <button class="btn" type="button">add item</button>\
        </form>';

    this.el = this.createEl(tpl, container, 'prepend');

    return {
        name: this.el.name,
        phone: this.el.phone,
        btnAdd: this.el.querySelector('button')
    };
};

ViewNewItem.prototype.show = function () {
    this.el.classList = 'well show';
};