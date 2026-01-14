import loginPage from "../../support/PA_loginPage"
import loginData from "../../fixtures/PA_loginData.json"

describe ('Verifikasi Fungsi Login', () => {
    it('TC-01-Pengguna Login dengan valid Credentials', () => {

        cy.intercept('GET', '/web/index.php/auth/login').as('loginRequest')

        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

        loginPage.assertionLoginSuccess()

    })

    it('TC-02-Pengguna login dengan valid username dan password salah', () => {

        cy.intercept('GET', '/web/index.php/auth/login').as('loginRequest')

        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)

        loginPage.inputPassword(loginData.invalidPassword)
        
        loginPage.loginButton()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

        loginPage.assertionLoginFailed()

    })

    it('TC-03-Pengguna login dengan username salah dan valid password', () => {

        cy.intercept('GET', '/web/index.php/auth/login').as('loginRequest')
        
        loginPage.visit()

        loginPage.inputUsername(loginData.invalidUsername)

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

        loginPage.assertionLoginFailed()

    })

    it('TC-04-Pengguna login dengan username kosong dan valid password', () => {
        loginPage.visit()

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })

    it('TC-05-Pengguna login dengan username valid dan password kosong', () => {
        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername)
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })

    it('TC-06-Pengguna login dengan username valid dan spasi di akhir input dan valid password', () => {

        cy.intercept('GET', '/web/index.php/auth/login').as('loginRequest')

        loginPage.visit()

        loginPage.inputUsername(loginData.validUsername + " ")

        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.loginButton()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

        loginPage.assertionLoginSuccess()

    })

    it('TC-07-Pengguna Login dengan membiarkan kolom username dan password kosong', () => {
        loginPage.visit()
        
        loginPage.loginButton()

        loginPage.assertionRequiredData()

    })


})