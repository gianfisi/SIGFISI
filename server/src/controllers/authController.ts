import { Request, Response } from 'express';
import db from '../database';
import jwt  from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
    await db.query('INSERT INTO usuarios set ?',[req.body]);
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
};