import { PersonaDetalle } from "./personadetalle.model"
import { DireccionNotificable } from "./direccionnotificable.model";
import { Contactos } from "./contactos.model";
export interface Persona{
    personaDetalle: PersonaDetalle,
    direccionNotificable: DireccionNotificable
    listaContactos: Contactos[]
}