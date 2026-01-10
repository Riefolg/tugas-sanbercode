describe ('Verifikasi Fungsi Login', () => {
    it('TC-08-Pengguna login dengan email dan valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('admin@gmail.com')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('div[role="alert"]').should('contains.text', 'Invalid credentials')
    })
})