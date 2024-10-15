describe('Validación: longitud máxima de caracteres', () => {
    it('Debe mostrar un mensaje de error cuando el nombre excede los 100 caracteres', () => {
        const apiUrl = Cypress.env('baseUrl'); // Obtener la URL desde las variables de entorno

        // Verificar si apiUrl está definido
        if (!apiUrl) {
            throw new Error('Error: apiUrl is not defined. Please check your environment variables.');
        }

        cy.visit(apiUrl); // Visitar la página principal

        // Hacer clic en el botón que dice "Add New Employee"
        cy.contains('Add New Employee').click();

        // Continuar con la validación del formulario
        cy.get('input[name="name"]').type('P'.repeat(101)); 
        cy.get('.btn').click();
        
        // Comprobar que se muestre el mensaje de error
        cy.get('.toast-message').should('contain.text', 'El nombre no puede tener más de 100 caracteres.');
    });
});

