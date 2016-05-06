var Model = function (ApiUrl) {
    EventTarget.apply(this);
    this.storageUrl = ApiUrl;
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
    $.ajax({
        type: "POST",
        url: this.storageUrl,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        context: this,
        success: function (response) {
            this.items.push(response);
            this.fire('itemsChanged');
        }
    });
};

Model.prototype.removeItem = function (index) {
    var item = this.items[index];
    $.ajax({
        type: 'DELETE',
        url: this.storageUrl,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: 'json',
        context: this,
        success: function () {
            this.items.splice(index, 1);
            this.fire('itemsChanged');
        }
    });
};