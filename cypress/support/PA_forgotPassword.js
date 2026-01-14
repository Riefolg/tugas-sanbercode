class forgotPassword {
    visitloginPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    visitforgotPasswordPage(){
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    }

    forgotPasswordTextLink(){
        cy.get('.orangehrm-login-forgot-header').click()
    }

    inputUsername(username){
        cy.get('input[placeholder="Username"]').type(username).should('have.value', username)
    }

    forgotPasswordCancelButton(){
        cy.get('.orangehrm-forgot-password-button--cancel').click()
    }

    resetPaswordButton(){
        cy.get('.oxd-button--secondary').click()
    }

    assertionForgotPassword(){
        cy.url().should('include', '/auth/requestPasswordResetCode')
    }

    assertionResetSuccess(){
        cy.get('.oxd-text--h6').should('contains.text', 'Reset Password link sent successfully')
    }

    assertionRequiredWarning(){
        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('contains.text', 'Required')
    }

}

export default new forgotPassword()