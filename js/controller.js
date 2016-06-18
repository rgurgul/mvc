var Controller = function (collection, viewList, viewNewItem) {
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewNewItem.addListener('addItem', collection.addItem.bind(collection));
    viewList.addListener('removeItem', function (index) {
        index > -1 && collection.removeItem(index);
    });
};