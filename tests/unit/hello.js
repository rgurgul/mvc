define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var model = require('js/models/contact-model');
    var newItem = new ContactModel('Joe', 19191);

    var helper = require('js/tools/helpers');


    registerSuite({
        name: 'hello',

        helper: function () {
           
        },

        init: function () {
            assert.strictEqual(newItem.name, "Joe", 'name should be Joe');
        },

        update: function () {
            newItem.update(111111);
            assert.equal(newItem.phone, 111111);
        }

        /*greet: function () {
         assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!',
         'hello.greet should return a greeting for the person named in the first argument');
         assert.strictEqual(hello.greet(), 'Hello, world!',
         'hello.greet with no arguments should return a greeting to "world"');
         },

         counter: function () {
         assert.strictEqual(hello.counter(1, 'INCREMENT'), 2);
         assert.strictEqual(hello.counter(1, 'DECREMENT'), 0);
         }*/
    });
});