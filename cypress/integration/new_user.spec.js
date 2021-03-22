describe ('New User Test', () =>{
    it('submits new user information', () =>{
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=new-user-button]').click()

        cy.get('[data-cy=firstName]').type('firstName-test')
        cy.get('[data-cy=lastName]').type('lastName-test')
        cy.get('[data-cy=email]').type('test@test.com')
        cy.get('.next').click()

        cy.get('[data-cy=age]').type('age-test')
        cy.get('[data-cy=birthday]').type('birthday-test')
        cy.get('.next').click()

        cy.get('[data-cy=companyName]').type('companyName-test')
        cy.get('[data-cy=companyYear]').type('companyYear-test')
        cy.get('[data-cy=new-user-submit]').click()

        cy.get('[data-cy=show-user-list-button]').click()

    })
})