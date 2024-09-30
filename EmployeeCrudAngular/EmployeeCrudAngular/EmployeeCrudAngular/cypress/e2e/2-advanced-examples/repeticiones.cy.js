describe('Validación: Nombre contiene repeticiones excesivas de caracteres', () => {
    it('Debe mostrar un mensaje de error cuando el nombre contiene repeticiones excesivas de caracteres', () => {
        cy.visit('http://localhost:4200/addemployee/');
        cy.get('input[name="name"]').type('Juuuuaannnn'); // Nombre con repeticiones excesivas
        cy.get('.btn').click();
        cy.get('.toast-message').should('contain.text', 'El nombre contiene repeticiones excesivas de caracteres.');
    });
});
