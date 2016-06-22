function EventTarget() {
    this.listeners = {};
}

EventTarget.prototype = {
    addListener: function (type, handler) {
        this.listeners[type] = handler;
    },
    fire: function () {
        var type = Array.prototype.shift.apply(arguments);
        this.listeners[type].apply(null, arguments);
    }
};