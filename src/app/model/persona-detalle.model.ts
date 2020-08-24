import { DocumentoIdentidad } from "./documento-identidad.model";
import { LugarNacimiento } from "./lugar-nacimiento.model"
import { LugarNacionalidad } from "./lugar-nacionalidad.model";
export interface PersonaDetalle{
    idPersona: number,
    codTipoSolicitante: string,
    descTipoSolicitante: string
    documentoIdentidad: DocumentoIdentidad,
    nombrePersona: string,
    primerApellido: string,
    segundoApellido: string,
    apellidoCasada: string,
    codEstadoCivil: string,
    estadoCivil: string,
    codSexo: string,
    sexo: string,
    fechaNacimiento: string,
    fechaFallecimiento: string,
    lugarNacimiento: LugarNacimiento,
    lugarNacionalidad: LugarNacionalidad,
    edad: number
}