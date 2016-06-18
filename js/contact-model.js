var ContactModel = function (name, phone) {
    this.name = name;
    this.phone = phone;
    this.update = function (phone) {
        this.phone = phone;
    }
};