describe('Reqres API Automation Test', () => {

  const baseUrl = 'https://reqres.in/api'
  const apiKey = 'reqres_1dd469e66b2b4d0ca2c5da37daa0fd84'

  it('GET - List Users', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users?page=2`,
      headers: { 'x-api-key': apiKey }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.length).to.be.greaterThan(0)
    })
  })

  it('GET - Single User', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/5`,
      headers: { 'x-api-key': apiKey }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.id).to.eq(5)
    })
  })

  it('GET - User Not Found', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/23`,
      headers: { 'x-api-key': apiKey },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('GET - List Resources', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/unknown`,
      headers: { 'x-api-key': apiKey }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.length).to.be.greaterThan(0)
    })
  })

  it('POST - Create User', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      headers: { 'x-api-key': apiKey },
      body: {
        name: 'QA Automation',
        job: 'Tester'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('QA Automation')
      expect(response.body.job).to.eq('Tester')
    })
  })

  it('PUT - Update User', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/5`,
      headers: { 'x-api-key': apiKey },
      body: {
        name: 'QA Automation Updated',
        job: 'Senior Tester'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.job).to.eq('Senior Tester')
    })
  })

  it('DELETE - Delete User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/5`,
      headers: { 'x-api-key': apiKey }
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })

})
