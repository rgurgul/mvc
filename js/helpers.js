function Helpers() {}

// A 'static method', it's just like a normal function
// it has no relation with any 'Helpers' object instance
// more info: http://stackoverflow.com/questions/1635116/javascript-class-method-vs-class-prototype-method
Helpers.createEl = function (tpl, target, method) {
    var container = document.createElement('div');
    container.innerHTML = tpl;
    this.el = container.firstChild;
    var targetContainer = document.querySelector(target);
    if (method === 'append') {
        targetContainer.appendChild(this.el);
    } else {
        targetContainer.insertBefore(this.el, targetContainer.firstElementChild);
    }
    return this.el;
};