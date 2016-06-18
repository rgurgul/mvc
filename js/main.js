(function () {
    var collection = new Collection([
            new ContactModel('Joe', 1234234),
            new ContactModel('Mike', 9989898)
        ]),
        viewNewItem = new ViewNewItem('.container-list'),
        viewList = new ViewList(collection, '.container-list'),
        controller = new Controller(collection, viewList, viewNewItem);

    viewList.renderList();
})();