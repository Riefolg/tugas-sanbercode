class directoryPage {

    visitDirectoryPage() {
        cy.contains('Directory').click()
        cy.url().should('include', '/directory/viewDirectory')
    }

    inputEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]')
          .clear()
          .type(employeeName)
          .should('have.value', employeeName)
    }

    selectJobTitle(jobTitle) {
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains(jobTitle).click()
    }

    clickSearchButton() {
        cy.contains('button', 'Search').click()
    }

    clickResetButton() {
        cy.contains('button', 'Reset').click()
    }

    assertionDirectoryPageLoaded() {
        cy.contains('Directory').should('be.visible')
        cy.get('input[placeholder="Type for hints..."]').should('be.visible')
    }

    assertionRecordsFound() {
        cy.contains('Records Found').should('be.visible')
    }

    assertionEmployeeNameCleared() {
        cy.get('input[placeholder="Type for hints..."]').should('have.value', '')
    }

}

export default new directoryPage()
