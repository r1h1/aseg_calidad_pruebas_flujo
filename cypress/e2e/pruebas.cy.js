/*
Autor: Daniel Rivas
*/

//URL A LA QUE SE EJECUTARÁ EL CONJUNTO DE PRUEBAS
var urlAProbar = 'http://localhost:52021/pages/home?ReturnUrl=%2fpages%2finicio';

describe("Conjunto de 10 pruebas, flujo registro de alumnos", () => {

    it("Inicio de sesión", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
    });

    it("Elegir opción del menú", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
    });

    it("Agregar nuevo docente", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
        cy.get('.ui-mini.app-has-icon').click();
        cy.get(':nth-child(2) > .app-field-PrimerNombre').type("Pruebas1");
        cy.get(':nth-child(2) > .app-field-PrimerNombre').type("Pruebas1");
        cy.get(':nth-child(3) > .app-field-SegundoNombre').type("Pruebas2");
        cy.get(':nth-child(3) > .app-field-SegundoNombre').type("Pruebas2");
        cy.get(':nth-child(4) > .app-field-PrimerApellido').type("Pruebas3");
        cy.get(':nth-child(4) > .app-field-PrimerApellido').type("Pruebas3");
        cy.get(':nth-child(5) > .app-field-SegundoApellido').type("Pruebas4");
        cy.get(':nth-child(5) > .app-field-SegundoApellido').type("Pruebas5");
        cy.get(':nth-child(6) > .app-field-ApellidoCasado').type("Pruebas6");
        cy.get(':nth-child(7) > .app-field-Cui').type("1111111111111");
        cy.get(':nth-child(8) > .app-field-Email').type("pruebas@gmail.com");
        cy.get(':nth-child(9) > .app-field-Telefono').type("11111111");
        cy.get(':nth-child(10) > .app-field-Direccion').type("Ciudad de Guatemala");
        cy.get(':nth-child(11) > .app-field-FechaNacimiento').type("26/05/2001{enter}");
        cy.get(':nth-child(12) > .app-field-TelefonoEmergencia').type("11111111");
        cy.get(':nth-child(13) > .app-field-Estado').type("Sí{enter}");
        cy.get(':nth-child(15) > .app-field-Eliminado').type("26/10/2023{enter}");
        cy.get(':nth-child(16) > .app-field-UsuarioModifica').type("admin{enter}");
    });

    it("Validar opciòn de bùsqueda", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
        cy.get('.app-echo-controls > .ui-btn-icon-notext').click();
    });

    it("Descargar reporte en CSV", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
        cy.get('[data-action-path="ag5"]').click();
    });

    it("Contraseña incorrecta", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin1234asdfasdf%{enter}");
    });

    it("Contraseña correcta", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
    });

    it("Ver todos los registros", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
        cy.get('.app-echo-see-all').click();
    });

    it("Registrar nuevo docente desde una pantalla diferente", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="docente"]').click();
        cy.get('.app-echo-see-all').click();
        cy.get('.app-btn-float').click();
        cy.get(':nth-child(2) > .app-field-PrimerNombre').type("Pruebas1");
        cy.get(':nth-child(2) > .app-field-PrimerNombre').type("Pruebas1");
        cy.get(':nth-child(3) > .app-field-SegundoNombre').type("Pruebas2");
        cy.get(':nth-child(3) > .app-field-SegundoNombre').type("Pruebas2");
        cy.get(':nth-child(4) > .app-field-PrimerApellido').type("Pruebas3");
        cy.get(':nth-child(4) > .app-field-PrimerApellido').type("Pruebas3");
        cy.get(':nth-child(5) > .app-field-SegundoApellido').type("Pruebas4");
        cy.get(':nth-child(5) > .app-field-SegundoApellido').type("Pruebas5");
        cy.get(':nth-child(6) > .app-field-ApellidoCasado').type("Pruebas6");
        cy.get(':nth-child(7) > .app-field-Cui').type("1111111111111");
        cy.get(':nth-child(8) > .app-field-Email').type("pruebas@gmail.com");
        cy.get(':nth-child(9) > .app-field-Telefono').type("11111111");
        cy.get(':nth-child(10) > .app-field-Direccion').type("Ciudad de Guatemala");
        cy.get(':nth-child(11) > .app-field-FechaNacimiento').type("26/05/2001{enter}");
        cy.get(':nth-child(12) > .app-field-TelefonoEmergencia').type("11111111");
        cy.get(':nth-child(13) > .app-field-Estado').type("Sí{enter}");
        cy.get(':nth-child(15) > .app-field-Eliminado').type("26/10/2023{enter}");
        cy.get(':nth-child(16) > .app-field-UsuarioModifica').type("{enter}");
    });

    it("Ver registros de un flujo diferente al de docentes", () => {
        cy.visit(urlAProbar);
        cy.viewport(1300, 700);
        cy.get('.app-field-UserName').type("admin");
        cy.get('.app-field-Password').type("admin123%{enter}");
        cy.get('[href="alumno"]').click();
    });
});
