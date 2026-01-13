import loginPage from "../../support/loginPage"
import loginData from "../../fixtures/loginData.json"

describe ('Verifikasi Fungsi Login', () => {
    it('TC-01-Pengguna Login dengan valid Credentials', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        loginPage.assertionLoginSuccess()

    })

    it('TC-02-Pengguna login dengan valid username dan password salah', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)

        loginPage.inputPassword(loginData.invalidPassword)
        
        loginPage.loginButton()

        loginPage.assertionLoginFailed()

    })

    it('TC-03-Pengguna login dengan username salah dan valid password', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.invalidUsername)

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        loginPage.assertionLoginFailed()

    })

    it('TC-04-Pengguna login dengan username kosong dan valid password', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.emptyUsername)

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })

    it('TC-05-Pengguna login dengan username valid dan password kosong', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)

        loginPage.inputPassword(loginData.emptyPassword)
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })

    it('TC-06-Pengguna login dengan username valid dan spasi di akhir input dan valid password', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername + " ")

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        loginPage.assertionLoginSuccess()

    })

    it('TC-07-Pengguna Login dengan membiarkan kolom username dan password kosong', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.emptyUsername)

        loginPage.inputPassword(loginData.emptyPassword)
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })


})