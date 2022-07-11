

describe('Home Screen Testing', function () {
    /* before(async function() {
        $('~WelcomeActivity.java').waitForDisplayed({});
    }) */
    it("test-signin-navigation", async function(){
        await delay(5000)
        return $('button2').click();
    });
    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
})

/* const { remote } = require('wd');
var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('../../helpers/desiredCapabilities').options;
var client;
async () => {
    client = await webdriverio({
        logLevel: 'trace',
        capabilities: config
    })
}

describe("CALCU Testing", function () {

    before(async function () {
        this.timeout(50000);
        return client.init();
    });

    it("test-close-startup-screen", async function(){
        return client.click('android=new UiSelector().resourceId("com.Sharp.Companion:id/button2")');
    });
}) */
