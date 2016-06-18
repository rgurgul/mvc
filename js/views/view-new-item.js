function ViewNewItem(container) {
    EventTarget.call(this);

    // UI
    this.createUI(container);
    this.btnAdd.addEventListener('click', function () {
        var result = new ContactModel(this.name.value, this.phone.value);
        result.name && this.fire('addItem', result);
        this.form.classList = 'hidden';
    }.bind(this));
}

ViewNewItem.prototype = Object.create(EventTarget.prototype);

ViewNewItem.prototype.createUI = function (container) {
    this.form = Helpers.createEl('form', container, {classList: 'hidden'});
    this.name = Helpers.createEl('input', this.form, {classList: 'form-control', name: 'name'});
    this.phone = Helpers.createEl('input', this.form, {classList: 'form-control', name: 'phone'});
    this.btnAdd = Helpers.createEl('button', this.form, {classList: 'btn', type: 'button', innerHTML: 'addItem'});
};

ViewNewItem.prototype.show = function () {
    this.form.classList = 'show form-inline';
};