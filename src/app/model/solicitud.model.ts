import { TiempoTramitacion } from "./tiempo-tramitacion.model";
import { Motivo } from "./motivo.model"
import { Persona } from "./persona.model";
export interface Solicitud{
    numSolicitud:string,
    numExpediente:string,
    idRegion: number,
    nombreRegion:string,
    idCentroAtencion: number,
    nombreCentroAtencion: string,
    fechaRegistro: string,
    fechaRegistroItinerante: string,
    tiempoTramitacion: TiempoTramitacion,
    motivo: Motivo,
    ListaAfiliados: Persona[]
}