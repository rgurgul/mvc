var Controller = function (contactCollection, viewList, viewNewItem) {

    /**
     * Views listening
     */
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewList.addListener('updateItem', function (index, phone) {
        var itemModel = contactCollection.items[index];
        itemModel && itemModel.update(phone);
    });
    viewList.addListener('removeItem', function (index) {
        index > -1 && contactCollection.removeItem(index);
    });
    viewNewItem.addListener('addItem', contactCollection.addItem.bind(contactCollection));

    /**
     * Model listening
     */
    contactCollection.addListener('itemsChanged', viewList.renderList.bind(viewList));

    /**
     * init
     */
    viewList.renderList(contactCollection.getItems());
};