class Usuarios {

    constructor() {
            this.personas = [];
        } // end constructor

    agregarPersona(id, nombre, sala) {

            let persona = { id, nombre, sala };

            this.personas.push(persona);

            return this.personas;

        } // end agregarPersona

    getPersona(id) {

            let persona = this.personas.filter(persona => {
                return persona.id === id;
            })[0];

            return persona;
        } // end getPersona

    getPersonas() {
            return this.personas;
        } // end getPersonas

    getPersonasPorSala(sala) {
            let personasEnSala = this.personas.filter(persona => {
                return persona.sala === sala
            });
            return personasEnSala;
        } // end getPersonasPorSala

    borrarPersona(id) {

            let personaBorrada = this.getPersona(id);

            this.personas = this.personas.filter(persona => {
                return persona.id != id;
            });

            return personaBorrada;

        } // end borrarPersona

} // Fin de la clase USUARIOS

module.exports = {
    Usuarios
}