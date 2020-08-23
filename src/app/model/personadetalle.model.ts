import { DocumentoIdentidad } from "./documentoidentidad.model";
import { LugarNacimiento } from "./lugarnacimiento.model"
import { LugarNacionalidad } from "./lugarnacionalidad.model";
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