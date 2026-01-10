describe ('Verifikasi Fungsi Login', () => {
    it('TC-06-Pengguna login dengan username valid dan spasi di akhir input dan valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin ')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
})