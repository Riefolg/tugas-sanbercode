describe ('Verifikasi Fungsi Login', () => {
    it('TC-04-Pengguna login dengan username kosong dan valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Required')
    })
})