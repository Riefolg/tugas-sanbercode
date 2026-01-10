describe ('Verifikasi Fungsi Login', () => {
    it('TC-02-Pengguna login dengan valid username dan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin12345')
        cy.get('.oxd-button').click()
        cy.get('div[role="alert"]').should('contains.text', 'Invalid credentials')

    })
})