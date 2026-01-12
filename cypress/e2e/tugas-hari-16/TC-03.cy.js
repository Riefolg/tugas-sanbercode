describe('Verifikasi Fungsi Login', () => {
    it('TC-03-Pengguna login dengan username salah dan valid password', () => {

        cy.intercept('POST', '/web/index.php/auth/validate').as('authInvalidUsername')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type('Admin000')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()

        cy.wait('@authInvalidUsername')

        cy.get('div[role="alert"]')
          .should('contain.text', 'Invalid credentials')
    })
})
