import {Router} from 'express';

import eventosController from '../controllers/eventosController';

import db from '../database';

class EventosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', eventosController.index);
        this.router.get('/solicitudes', eventosController.solicitudes);
        this.router.get('/:id', eventosController.getOne);
        this.router.get('/filtro/:titulo', eventosController.getTitulo);
        this.router.post('/', eventosController.create);
        this.router.put('/:id', eventosController.update);
        this.router.put('/aprobar/:id', eventosController.aprobar);       
        this.router.put('/desaprobar/:id', eventosController.desaprobar);
        this.router.delete('/:id', eventosController.delete);         
             
            
    }
}

const eventosRoutes = new EventosRoutes();
export default eventosRoutes.router;