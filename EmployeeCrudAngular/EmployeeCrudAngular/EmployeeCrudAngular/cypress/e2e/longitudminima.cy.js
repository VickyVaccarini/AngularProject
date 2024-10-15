describe('Validación: Longitud mínima del nombre', () => {
    it('Debe mostrar un mensaje de error cuando el nombre tiene menos de 2 caracteres', () => {
        const apiUrl = Cypress.env('baseUrl'); // Obtener la URL desde las variables de entorno

        // Verificar si apiUrl está definido
        if (!apiUrl) {
            throw new Error('Error: apiUrl is not defined. Please check your environment variables.');
        }

        cy.visit(apiUrl); // Visitar la página principal

        // Hacer clic en el botón que dice "Add New Employee"
        cy.get('button.btn-primary').contains('Add New Employee').click();

        // Continuar con la validación del formulario
        cy.get('input[name="name"]').type('P');
        cy.get('.btn').click();
        
        // Comprobar que se muestre el mensaje de error
        cy.get('.toast-message').should('contain.text', 'El nombre no puede tener menos de 2 caracteres.');
    });
});

