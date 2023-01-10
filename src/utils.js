import isMobile from 'ismobilejs'
/**
 * Get real device size by orientation
 * @author juanfuent.es
 * @returns { object } width and height
 */
function windowSize() {
    let width = window.innerWidth
    let height = window.innerHeight

    function getMobile() {
        width = window.screen.width
        height = window.screen.height
        // Validate if iOS; Bug by orientation
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) iOSCorrection()
    }

    function iOSCorrection() {
        if (Math.abs(window.orientation) == 90) {
            width = window.screen.height
            height = window.screen.width
        }
    }

    if (isMobile(window.navigator).any) getMobile()

    return {
        width: width,
        height: height
    }
}

export {
    windowSize
}