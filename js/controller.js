var Controller = function (model, viewList, viewNewItem) {
    viewList.addListener('newItem', viewNewItem.show.bind(viewNewItem));
    viewNewItem.addListener('addItem', model.addItem.bind(model));
    viewList.addListener('removeItem', function (index) {
        index > -1 && model.removeItem(index);
    });
};