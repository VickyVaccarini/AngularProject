describe('editEmployeeTest', () => {
    it('Carga correctamente la página de ejemplo', () => {
      cy.visit('http://localhost:4200/') // Colocar la url local o de Azure de nuestro front
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(7) > :nth-child(4) > a > .fa').click();
      cy.get('.form-control').clear('Victoria Vaccarini');
      cy.get('.form-control').type('Maria Victoria Vaccarini');
      cy.get('.btn').click();
      cy.get(':nth-child(8) > :nth-child(5) > a > .fa').click();
      cy.get(':nth-child(10) > :nth-child(4) > a > .fa').click();
      cy.get('.btn').click();
      cy.get('.form-control').clear('P');
      cy.get('.form-control').type('Pablo Perez{enter}');
      cy.get('.btn').click();
      cy.get(':nth-child(10) > :nth-child(2)').click();
      cy.get(':nth-child(10) > :nth-child(2)').click();
      cy.get(':nth-child(10) > :nth-child(2)').click();
      cy.get(':nth-child(10) > :nth-child(3)').click();
      /* ==== End Cypress Studio ==== */
    })
  })