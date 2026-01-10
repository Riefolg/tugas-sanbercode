describe ('Verifikasi Fungsi Login', () => {
    it('TC-07-Pengguna Login dengan membiarkan kolom username dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('contains.text', 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contains.text', 'Required')
    })
})