export default class Login {

    signin(){
 
        const data = require('../utilities/loginpageLocators.json')
        const method = require('../utilities/commonMethods')

        method.verifyTitle("OrangeHRM")
        method.sendData(data.usernameLocator, data.username)
        method.time()
        method.sendData(data.passwordLocator, data.password)
        method.time()
        method.specificScreenshot(data.submitLocator, 'Login')
        method.time()
        method.buttonClick(data.submitLocator)
        method.time()
        method.fullScreenshot("LoginSuccessful")

    }
}