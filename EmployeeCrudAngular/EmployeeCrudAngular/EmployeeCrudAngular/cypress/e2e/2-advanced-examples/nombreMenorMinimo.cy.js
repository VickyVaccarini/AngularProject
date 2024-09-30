describe('Validación: Nombre tiene menos de 2 caracteres', () => {
    it('Debe mostrar un mensaje de error cuando el nombre tiene menos de 2 caracteres', () => {
        cy.visit('http://localhost:4200/addemployee/');
        cy.get('input[name="name"]').type('A'); // Escribiendo un nombre de 1 carácter
        cy.get('.btn').click();
        
        // Aserción ajustada para el mensaje correcto
        cy.get('.toast-message').should('contain.text', 'El nombre no puede tener menos de 2 caracteres.');
    });
});
