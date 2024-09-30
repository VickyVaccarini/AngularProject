describe('Validación: Nombre excede el máximo de caracteres', () => {
    it('Debe mostrar un mensaje de error cuando el nombre excede los 100 caracteres', () => {
        cy.visit('http://localhost:4200/addemployee/');
        cy.get('input[name="name"]').type('A'.repeat(101)); // Escribiendo un nombre de 101 caracteres
        cy.get('.btn').click();
        
        // Aserción ajustada para el mensaje correcto
        cy.get('.toast-message').should('contain.text', 'El nombre no puede tener más de 100 caracteres.');
    });
});

