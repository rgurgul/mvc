function Helpers() {
    this.listeners = {};
}

Helpers.prototype = {
    addListener: function (type, handler) {
        this.listeners[type] = handler;
    },
    fire: function (type, obj) {
        this.listeners[type](obj);
    },
    createEl: function (tpl, target, method) {
        var container = document.createElement('div');
        container.innerHTML = tpl;
        this.el = container.firstChild;
        var targetContainer = document.querySelector(target);
        if(method === 'append') {
            targetContainer.appendChild(this.el);
        } else {
            targetContainer.insertBefore(this.el, targetContainer.firstElementChild);
        }
        return this.el;
    }
};