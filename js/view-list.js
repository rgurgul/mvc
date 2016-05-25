var ViewList = function (model, container) {
    Helpers.call(this);

    // model
    this.model = model;
    model.addListener('itemsChanged', this.renderList.bind(this));

    // UI
    this.controls = this.createUI(container);
    this.controls.btnNew.addEventListener('click', function () {
        this.fire('newItem');
    }.bind(this));
    this.controls.btnDelete.addEventListener('click', function () {
        this.controls.output.innerText = '';
        this.fire('removeItem', this.controls.list.selectedIndex);
    }.bind(this));
};

ViewList.prototype = Object.create(Helpers.prototype);

ViewList.prototype.createUI = function (container) {
    var tpl = '<div class="row">\
        <h4 class="col-lg-12">phone: <span class="output"></span></h4>\
        <div class="col-lg-9">\
        <select class="form-control list" size="15"></select>\
        </div>\
        <div class="col-lg-3">\
        <button class="btn btn-default btn-block btn-new">+</button>\
        <button class="btn btn-default btn-block btn-delete">-</button>\
        </div>\
        </div>';

    var el = this.createEl(tpl, container, 'append');

    return {
        list: el.querySelector('.list'),
        btnNew: el.querySelector('.btn-new'),
        btnDelete: el.querySelector('.btn-delete'),
        output: el.querySelector('.output')
    }
};

ViewList.prototype.renderList = function () {
    this.controls.list.options.length = 0;
    var items = this.model.getItems();
    items.forEach(function (val, key) {
        var opt = new Option(val.name, key);
        opt.addEventListener('click', function () {
            this.controls.output.innerText = val.phone;
        }.bind(this));
        this.controls.list.options[key] = opt;
    }, this);
};