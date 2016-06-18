function Helpers() {
}

// A 'static method', it's just like a normal function
// it has no relation with any 'Helpers' object instance
// more info: http://stackoverflow.com/questions/1635116/javascript-class-method-vs-class-prototype-method
Helpers.createEl = function (tagName, target, param) {
    var el = document.createElement(tagName);
    if (param) {
        for (var key in param) {
            el[key] = param[key];
        }
    }
    target instanceof HTMLElement
        ? target.appendChild(el)
        : document.querySelector(target).appendChild(el);

    return el;
};