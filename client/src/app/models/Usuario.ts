export interface Usuario {
    id_usuario?: number;
    nombres?: string;
    apellidos?: string;
    dni?: number;
    celular?: number;
    distrito?: string;
    direccion?: string;
    correo?: string;
    contrasena?: string;
    fecha_de_nacimiento: Date;
    create_at?: Date;
}