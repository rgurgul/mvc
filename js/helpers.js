function Helpers() {
}

// A 'static method', it's just like a normal function
// it has no relation with any 'Helpers' object instance
// more info: http://stackoverflow.com/questions/1635116/javascript-class-method-vs-class-prototype-method
Helpers.createEl = function (el, target, param) {
    var result = document.createElement(el);
    if (param) {
        for (var key in param) {
            result[key] = param[key];
        }
    }
    target instanceof HTMLElement
        ? target.appendChild(result)
        : document.querySelector(target).appendChild(result);

    return result;
};