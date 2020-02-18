import {Request, Response} from 'express';

import db from '../database';

class EventosController {
    
    public async index(req: Request ,res: Response){
        const eventos = await db.query('SELECT * FROM eventos e INNER JOIN solicitudes s ON s.id_solicitud = e.id_solicitud where s.estado = "aprobado"');
        res.json(eventos);
    }

    public async getOne(req: Request ,res: Response):  Promise<any>{
        const { id } = req.params;
        // const eventos = await db.query('SELECT * FROM eventos WHERE id_evento = ?', [id]);
        const eventos = await db.query('SELECT id_evento, titulo, descripcion, imagen, categoria, e.nom_expositor, e.ape_expositor, fecha_inicio, lugar FROM eventos e INNER JOIN aulas a ON e.id_aula = e.id_aula INNER JOIN conferencias c on e.id_conferencia = c.id_conferencia INNER JOIN solicitudes s ON e.id_solicitud = s.id_solicitud WHERE id_evento = ?', [id]);
        
          
        if(eventos.length  > 0){
            return res.json(eventos[0]);
        }
        res.status(404).json({text: "El evento no existe"});
    }

    public async getTitulo(req: Request ,res: Response):  Promise<any>{
        const { titulo } = req.params;
        const eventos = await db.query('SELECT * FROM eventos WHERE titulo = ?', [titulo]);
        if(eventos.length  > 0){
            return res.json(eventos[0]);
        }
        res.status(404).json({text: "El evento no existe"});
    }    
    
    // public async create(req: Request ,res: Response): Promise<void>{
    //     await db.query('INSERT INTO eventos set ?',[req.body]);
    //     res.json({message: 'evento guardado'});
    // }

    public async create(req: Request ,res: Response): Promise<void>{
         await db.query('INSERT INTO eventos(titulo, descripcion, imagen, categoria, nom_expositor, ape_expositor, id_aula, id_conferencia, id_solicitud) values (?,?,?,?,?,?,?,?,?)',[req.body.titulo, req.body.descripcion,req.body.imagen,req.body.categoria,req.body.nom_expositor, req.body.ape_expositor,req.body.id_aula,req.body.id_conferencia,req.body.id_solicitud]);
        // await db.query('INSERT INTO solicitudes(estado) values ("proceso")');
        // const solicitud = await db.query('SELECT id_solicitud FROM solicitudes ORDER BY id_solicitud DESC LIMIT 1;')
        // await db.query('INSERT INTO conferencias(fecha_inicio, fecha_fin) values (?,?)',[req.body.fecha_inicio,req.body.fecha_fin]);
        // const conferencia = await db.query('SELECT id_conferencia FROM conferencias ORDER BY id_conferencia DESC LIMIT 1;')
        // await db.query('INSERT INTO eventos(titulo, descripcion, imagen, categoria, nom_expositor, ape_expositor, id_aula, id_conferencia, id_solicitud) values (?,?,?,?,?,?,?,?,?)',[req.body.titulo, req.body.descripcion,req.body.imagen,req.body.categoria,req.body.nom_expositor, req.body.ape_expositor,req.body.id_aula,conferencia,solicitud]);
        
        res.json({message: "evento creado"});

    }

    public async update(req: Request ,res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE eventos set ? WHERE id =?', [req.body, id]);
        res.json({message: 'El evento fue actualizado'});
    }

    public async delete(req: Request ,res: Response): Promise<void>{
        const { id } = req.params;
        const eventos = await db.query('DELETE * FROM eventos WHERE id = ?', [id]);
        res.json({message: 'El evento fue eliminado'});
    }

    public async aprobar(req: Request ,res: Response): Promise<void>{
        const { id } = req.params;
        
        const eventos = await db.query('UPDATE solicitudes set estado = "aprobado" WHERE id_solicitud = ?', [id]);
        res.json({message: 'El evento fue aprobado'});
    }

    public async desaprobar(req: Request ,res: Response): Promise<void>{
        const { id } = req.params;
        
        const eventos = await db.query('UPDATE solicitudes set estado = "desaprobado" WHERE id_solicitud = ?', [id]);
        res.json({message: 'El evento fue desaprobado'});
    }

    public async solicitudes(req: Request ,res: Response){
        const eventos = await db.query('SELECT id_evento, titulo, descripcion, imagen, categoria, e.nom_expositor, e.ape_expositor, fecha_inicio, lugar, estado, e.id_solicitud FROM eventos e INNER JOIN aulas a ON a.id_aula = e.id_aula INNER JOIN conferencias c on e.id_conferencia = c.id_conferencia INNER JOIN solicitudes s ON e.id_solicitud = s.id_solicitud WHERE estado = "proceso"');
        res.json(eventos);
    }
    
}

const eventosController = new EventosController();
export default eventosController;