var Controller = function (contactCollection, viewList, viewNewItem) {
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewNewItem.addListener('addItem', contactCollection.addItem.bind(contactCollection));
    viewList.addListener('updateItem', function (index, phone) {
        var itemModel = contactCollection.items[index];
        itemModel && itemModel.update(phone);
    });
    viewList.addListener('removeItem', function (index) {
        index > -1 && contactCollection.removeItem(index);
    });
};