import {Router} from 'express';

import usuariosController from '../controllers/usuariosController';

import db from '../database';

class UsuariosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usuariosController.index);
        // this.router.post('/', usuariosController.create);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;