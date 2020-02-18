create database sigfisi;
use sigfisi;

create table usuarios(
    id_usuario int(10) not null AUTO_INCREMENT PRIMARY KEY,
    nombres varchar(45) not null,
    apellidos varchar(45) not null,
    dni int(8) not null,
    celular int(9),
    distrito varchar(50),
    direccion varchar(200),
    correo varchar(200),
    contraseña varchar(200),
    fecha_de_nacimiento Date,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


create table solicitudes(
    id_solicitud int(10) not null AUTO_INCREMENT PRIMARY KEY,
    estado varchar(50),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create table expositores(
--     id_expositor int(10) not null AUTO_INCREMENT PRIMARY KEY,
--     nomb_expositor varchar(100),
--     ape_expositor varchar(100),
--     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

create table aulas(
    id_aula int(10) not null AUTO_INCREMENT PRIMARY KEY,
    lugar varchar(100) not null,
    cantidad int(10) not null,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create TABLE conferencias(
    id_conferencia int(10) not null AUTO_INCREMENT PRIMARY KEY,
    fecha_inicio Date,
    fecha_fin Date,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


create table eventos(
    id_evento int(10) not null AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(180),    
    descripcion varchar(300),
    imagen varchar(300),
    categoria varchar(500),
    nom_expositor varchar(100),
    ape_expositor varchar(100),
    -- id_expositor int(10),
    id_aula int(10),
    id_conferencia int(10),
    id_solicitud int(10),

    -- foreign key(id_expositor) references expositores(id_expositor),
    foreign key(id_aula) references aulas(id_aula),
    foreign key(id_conferencia) references conferencias(id_conferencia),    
    foreign key(id_solicitud) references solicitudes(id_solicitud),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

create table comprar(
    id_comprar int(10) not null AUTO_INCREMENT PRIMARY KEY,
    id_usuario int(10),
    id_evento int(10),
    foreign key(id_usuario) references usuarios(id_usuario),
    foreign key(id_evento) references eventos(id_evento),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);
