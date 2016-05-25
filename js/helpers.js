function Helpers() {}

// A 'static method', it's just like a normal function
// it has no relation with any 'Helpers' object instance
// more info: http://stackoverflow.com/questions/1635116/javascript-class-method-vs-class-prototype-method
Helpers.createEl = function (tpl, target, method) {
    var targetContainer = document.querySelector(target);
    var container = document.createElement('div');
    container.innerHTML = tpl;
    var el = container.firstChild;
    if (method === 'append') {
        targetContainer.appendChild(el);
    } else {
        targetContainer.insertBefore(el, targetContainer.firstElementChild);
    }
    return el;
};