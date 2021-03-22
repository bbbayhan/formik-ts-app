describe ('Delete User Test', () =>{
    it('delete user information', () =>{
        cy.visit('http://localhost:3000')
        cy.get('[id=new-user-button]').click()
    })
})