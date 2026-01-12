describe('Verifikasi Fungsi Login', () => {
    it('TC-05-Pengguna login dengan valid username dan password kosong', () => {

        cy.intercept(
          'GET',
          '/web/index.php/api/v2/dashboard/shortcuts'
        ).as('dashboardShortcuts')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('.oxd-button').click()

        cy.get('.oxd-input-group > .oxd-text')
          .should('contain.text', 'Required')

        // dashboard API tidak boleh terpanggil
        cy.get('@dashboardShortcuts.all').should('have.length', 0)
    })
})
