var Model = function (storageUrl) {
    EventTarget.apply(this);
    this.storageUrl = storageUrl;
    this.items = [];
    this.selectedItem = undefined;

    $.get(this.storageUrl, function (response) {
        this.items = response;
        this.fire('ready');
    }.bind(this), 'json');
};

Model.prototype = Object.create(EventTarget.prototype);

Model.prototype.setSelected = function (index) {
    this.selectedItem = this.getItem(index);
    this.fire('selectedChanged');
};

Model.prototype.getItems = function () {
    return this.items;
};

Model.prototype.getItem = function (index) {
    return this.items[index];
};

Model.prototype.addItem = function (item) {
    $.post(this.storageUrl, item, function (response) {
        this.items.push(response);
        this.fire('itemsChanged');
    }.bind(this), 'json');
};

Model.prototype.removeItem = function (index) {
    var item = this.items[index];
    $.ajax({
        url: this.storageUrl,
        type: 'DELETE',
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: 'json',
        context: this,
        success: function () {
            this.items.splice(index, 1);
            this.fire('itemsChanged');
        }
    })
};