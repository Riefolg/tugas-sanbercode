class loginPage {
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username){
        cy.get('input[placeholder="Username"]').type(username).should('have.value', username)
    }
    inputPassword(password){
        cy.get('input[placeholder="Password"]').type(password)
    }
    loginButton(){
        cy.get('.oxd-button').click()
    }
    assertionLoginSuccess(){
        cy.url().should('include', '/dashboard/index')
    }
    assertionLoginFailed(){
        cy.get('div[role="alert"]').should('contains.text', 'Invalid credentials')
    }
    assertionRequiredData(){
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Required')
    }
}

export default new loginPage()