describe('Verifikasi Fungsi Login', () => {
    it('TC-01-Pengguna Login dengan valid Credentials', () => {

        // intercept API login
        cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()

        // tunggu request login selesai
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 302)

        // verifikasi berhasil login
        cy.url().should('include', '/dashboard/index')
    })
})
