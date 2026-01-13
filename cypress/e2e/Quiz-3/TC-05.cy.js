describe ('Verifikasi Fungsi Login', () => {
    it('TC-05-Pengguna login dengan valid username dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('.oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Required')
    })
})