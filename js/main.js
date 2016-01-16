(function () {
    var model = new Model(['js', 'html', 'css']);
    var view = new View(model, {
        list: document.querySelector('.list'),
        btnAdd: document.querySelector('.btn-add'),
        btnDelete: document.querySelector('.btn-delete')
    });
    view.renderView();
    new Controller(model, view);
})();
