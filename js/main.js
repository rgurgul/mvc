(function () {
    var model = new Model([
            {name: "Joe", phone: 1234},
            {name: "Mike", phone: 9999}
        ]),
        viewNewItem = new ViewNewItem('.container-list'),
        viewList = new ViewList(model, '.container-list'),
        controller = new Controller(model, viewList, viewNewItem);

    viewList.renderList();
})();