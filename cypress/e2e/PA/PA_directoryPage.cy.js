import directoryPage from '../../support/PA_directoryPage'
import data from '../../fixtures/PA_directoryData.json'

describe('Verifikasi Fitur Directory', () => {

    beforeEach(() => {
        // ===== LOGIN =====
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard')
    })

    it('TC-01-Verifikasi halaman directory load dengan sukses', () => {
        directoryPage.visitDirectoryPage()
        directoryPage.assertionDirectoryPageLoaded()
    })

    it('TC-02-Cari valid employee name di directory', () => {
        directoryPage.visitDirectoryPage()
        directoryPage.inputEmployeeName(data.employeeName)
        directoryPage.clickSearchButton()
        directoryPage.assertionRecordsFound()
    })

    it('TC-03-Mencari Directory berdasarkan job title', () => {
        directoryPage.visitDirectoryPage()
        directoryPage.selectJobTitle(data.jobTitle)
        directoryPage.clickSearchButton()
        directoryPage.assertionRecordsFound()
    })

    it('TC-04-Mencari nama directory berdasarkan Employee Name dan Job Title', () => {
        directoryPage.visitDirectoryPage()
        directoryPage.inputEmployeeName(data.employeeName)
        directoryPage.selectJobTitle(data.jobTitle)
        directoryPage.clickSearchButton()
        directoryPage.assertionRecordsFound()
    })

    it('TC-05-Reset Directory filter', () => {
        directoryPage.visitDirectoryPage()
        directoryPage.inputEmployeeName(data.employeeName)
        directoryPage.selectJobTitle(data.jobTitle)
        directoryPage.clickResetButton()
        directoryPage.assertionEmployeeNameCleared()
        directoryPage.assertionRecordsFound()
    })

})
