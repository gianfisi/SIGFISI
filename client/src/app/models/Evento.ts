export interface Evento {
    id_evento?: number;
    titulo?: string;
    descripcion?: string;
    imagen?: string;
    categoria?: string;
    nom_expositor?: string;
    ape_expositor?: string;
    id_aula?: number;
    id_conferencia?: number;
    id_solicitud?: number;
    create_at?: Date;
}