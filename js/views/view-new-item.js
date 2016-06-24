function ViewNewItem(container) {
    EventTarget.call(this);
    this.createUI(container);
}

ViewNewItem.prototype = Object.create(EventTarget.prototype);

ViewNewItem.prototype.createUI = function (container) {
    this.form = Helpers.createEl('form', container, {classList: 'hidden'});
    var name = Helpers.createEl('input', this.form, {classList: 'form-control', name: 'name'});
    var phone = Helpers.createEl('input', this.form, {classList: 'form-control', name: 'phone'});
    var btnAdd = Helpers.createEl('button', this.form, {classList: 'btn', type: 'button', innerHTML: 'addItem'});

    // UI events
    btnAdd.addEventListener('click', function () {
        var result = new ContactModel(name.value, phone.value);
        result.name && this.fire('addItem', result);
        this.form.classList = 'hidden';
    }.bind(this));
};

ViewNewItem.prototype.show = function () {
    this.form.classList = 'show form-inline';
};