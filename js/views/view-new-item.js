function ViewNewItem(container) {
    EventTarget.call(this);
    this.createUI(container);
}

ViewNewItem.prototype = Object.create(EventTarget.prototype);

ViewNewItem.prototype.createUI = function (container) {
    this.form = Helpers.createEl('form', container, {class: 'hidden'});
    var name = Helpers.createEl('input', this.form, {class: 'form-control', name: 'name'});
    var phone = Helpers.createEl('input', this.form, {class: 'form-control', name: 'phone'});
    var btnAdd = Helpers.createEl('button', this.form, {class: 'btn', type: 'button', innerHTML: 'addItem'});

    // UI events
    btnAdd.addEventListener('click', function () {
        var result = new ContactModel(name.value, phone.value);
        result.name && this.fire('addItem', result);
        this.form.className = 'hidden';
    }.bind(this));
};

ViewNewItem.prototype.show = function () {
    this.form.className = 'show form-inline';
};