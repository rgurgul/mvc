var Controller = function (contactCollection, viewList, viewNewItem) {
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewNewItem.addListener('addItem', contactCollection.addItem.bind(contactCollection));
    viewList.addListener('updateItem', function (evt) {
        var itemModel = contactCollection.items[evt[0]];
        itemModel && itemModel.update(evt[1]);
    });
    viewList.addListener('removeItem', function (index) {
        index > -1 && contactCollection.removeItem(index);
    });
};