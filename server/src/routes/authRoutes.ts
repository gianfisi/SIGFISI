import {Router} from 'express';
const router: Router = Router();
import db from '../database';
import { signin, signup, profile } from '../controllers/authController';


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export default router;