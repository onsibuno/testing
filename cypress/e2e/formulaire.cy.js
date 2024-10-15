describe('Test formulaire d\'ajout', () => {
  it('passes', () => {
    cy.visit('http://localhost/github_testing/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(Math.random().toString(36).substring(2, 15) + '@gmail.com')
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
  })
})