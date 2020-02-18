import {Request, Response} from 'express';

import db from '../database';

class UsuariosController {
    
    public async index(req: Request ,res: Response){
        const usuarios = await db.query('SELECT * FROM usuarios');
        res.json(usuarios);
    }
    
    // public async create(req: Request ,res: Response): Promise<void>{
    //     await db.query('INSERT INTO usuarios set ?',[req.body]);
    //     res.json({message: 'usuario guardado'});
    // }    

    

}

const usuariosController = new UsuariosController();
export default usuariosController;