(function () {
    var contactCollection = new ContactCollection([
            new ContactModel('Joe', 1234234),
            new ContactModel('Mike', 9989898)
        ]),
        viewNewItem = new ViewNewItem('.container-list'),
        viewList = new ViewList('.container-list'),
        controller = new Controller(contactCollection, viewList, viewNewItem);
})();