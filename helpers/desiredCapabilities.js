exports.desiredCapabilities = {
    desiredCapabilities: {
        "platformName": "android",
        "appium:platformVersion": "11.0",
        "appium:app": "D:\\Workspace\\Tido\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk",
        "appium:fullReset": false,
        "appium:deviceName": "emulator-5554",
        "appium:appPackage": "com.Sharp.Companion",
        "appium:appActivity": "com.Sharp.Companion.ui.activity.SplashScreenActivity"
      },
      port: 4723,
      path: '/wd/hub'
}