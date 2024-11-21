import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('Home - Parei na aula 5');
    // res.render('pages/page');
}
export const dogs = (req: Request, res: Response) => {
    res.send('Dogs no Controller');
    // res.render('pages/dogs');
}
export const cats = (req: Request, res: Response) => {
    res.send('Cats no Controller');
    // res.render('pages/cats');
}
export const fishes = (req: Request, res: Response) => {
    res.send('Fishes no Controller');
    // res.render('pages/fishes');
}