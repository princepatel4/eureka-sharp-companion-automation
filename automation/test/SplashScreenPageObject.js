class SplashScreenPageObject {
    
    async waitForIsShown (isShown = true) {
        return $('~SplashScreenActivity.java').waitForDisplayed({
            reverse: !isShown,
        });
    }
}
export default SplashScreenPageObject