function EventTarget() {
    this.listeners = {};
}

EventTarget.prototype = {
    addListener: function (type, handler) {
        this.listeners[type] = handler;
    },
    fire: function (type, obj) {
        this.listeners[type](obj);
    }
};