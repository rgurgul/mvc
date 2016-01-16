(function () {
    var model = new Model('http://js.edu.pl/api/examples/contacts.php');
    var view = new View(model, {
        list: document.querySelector('.list'),
        btnAdd: document.querySelector('.btn-add'),
        btnDelete: document.querySelector('.btn-delete'),
        output: document.querySelector('.output')
    });
    model.addListener('ready', function () {
        view.renderView();
    });
    new Controller(model, view);
})();
