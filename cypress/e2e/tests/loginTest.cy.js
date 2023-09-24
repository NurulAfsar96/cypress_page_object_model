

import URL from "../base/openURL"
import Login from "../pages/loginPage"

describe("Orange HRM", function(){
    // create instance for the classes on different repo
    const url = new URL()
    const log = new Login()


    it("Login Test", function(){

        url.openUrl()
        log.signin()
    })

})