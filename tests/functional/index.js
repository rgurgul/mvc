define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        'greeting form': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .setFindTimeout(5000)
                .findByCssSelector('option[value="0"]')
                //.findByXpath("/html/body/div/div[1]/div/div[1]/select/option[1]")

                .click()
                .sleep(1000)
                .getTimeout(1000)
                //.findByCssSelector('input[name=tel]')
                //.findByXpath('/html/body/div/div[1]/div/div[2]/input')
                .end()

                .findByXpath("//input[@name='tel']")
                .click()
                /*.findByCssSelector('#loginForm input[type=submit]')
                 .click()
                 .end()
                 .findById('greeting')*/
                .sleep(1000)
                .getTimeout(1000)
                .getProperty("value")
                .then(function (text) {
                    console.log('ttttt', text);
                })
                .type('Elaine')
                .sleep(1000)
                .getTimeout(1000)
                
                .getProperty("value")
                .then(function (xxx) {
                    console.log('xxxxx',xxx);
                })
                .end()
                .findByCssSelector('option[value="1"]')
                .click()
                .end()
                .sleep(1000)
                .findByXpath("//input[@name='tel']")
                .type('srelaine')
                .getProperty('value')
                .then(function (values) {
                    console.log('last', values);
                })

        }
    });
});