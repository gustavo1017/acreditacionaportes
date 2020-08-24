import { PersonaDetalle } from "./persona-detalle.model"
import { DireccionNotificable } from "./direccion-notificable.model";
import { Contactos } from "./contactos.model";
export interface Persona{
    personaDetalle: PersonaDetalle,
    direccionNotificable: DireccionNotificable
    listaContactos: Contactos[]
}