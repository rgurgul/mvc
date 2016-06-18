var Controller = function (collection, viewList, viewNewItem) {
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewNewItem.addListener('addItem', collection.addItem.bind(collection));
    viewList.addListener('updateItem', function (evt) {
        var itemModel = collection.items[evt[0]];
        itemModel.update(evt[1]);
    });
    viewList.addListener('removeItem', function (index) {
        index > -1 && collection.removeItem(index);
    });
};