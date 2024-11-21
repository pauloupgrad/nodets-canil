import { Request, Response } from 'express';

export const search = (req: Request, res: Response) => {
    res.send('Search no Controller');
    // res.render('pages/search');
}