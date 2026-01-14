import forgotPassword from "../../support/PA_forgotPassword"
import PA_forgotPassword from "../../fixtures/PA_forgotPassword.json"

describe ('Verifikasi Fungsi Forgot Password', () => {
    it('TC-01-Pengguna Klik Text Link Forgot Password', () => {

        forgotPassword.visitloginPage()

        cy.intercept('GET', '/web/index.php/auth/requestPasswordResetCode').as('resetRequests')

        forgotPassword.forgotPasswordTextLink()

        cy.wait('@resetRequests').its('response.statusCode').should('eq', 200)

        forgotPassword.assertionForgotPassword()

    })

    it('TC-02-Pengguna input valid username', () => {

        forgotPassword.visitforgotPasswordPage()

        cy.intercept('GET', '/web/index.php/auth/sendPasswordReset').as('sendRequests')

        forgotPassword.inputUsername(PA_forgotPassword.validUsername)
        
        forgotPassword.resetPaswordButton()

        cy.wait('@sendRequests').its('response.statusCode').should('eq', 200)

        forgotPassword.assertionResetSuccess()
    })

    it('TC-03-Pengguna klik reset password dengan input kosong', () => {

        forgotPassword.visitforgotPasswordPage()
        
        forgotPassword.resetPaswordButton()

        forgotPassword.assertionRequiredWarning()
    })

    it('TC-04-Pengguna klik tombol cancel', () => {

        forgotPassword.visitforgotPasswordPage()
        
        forgotPassword.forgotPasswordCancelButton()

        cy.url().should('include', '/auth/login')

    })

})