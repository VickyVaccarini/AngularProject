describe('Test addEmployee - campo nombre vacío', () => {
    it('Debe mostrar un mensaje de error cuando el campo del nombre está vacío', () => {
      // 1. Visitar la página de agregar empleado
      cy.visit('http://localhost:4200/addemployee/');
  
      // 2. Hacer clic en el botón (suponiendo que sea un botón de agregar o enviar)
      cy.get('.btn').click();
  
      // 3. Verificar que el mensaje de error contenga el texto adecuado
      cy.get('.toast-message').should('contain.text', 'El nombre no puede estar vacío.');
    });
  });
  