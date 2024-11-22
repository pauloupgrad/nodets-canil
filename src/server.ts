import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';


dotenv.config();
const server = express();

// SET
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// USE
server.use(express.static(path.join(__dirname, '../public')));
// server.use(express.json());
// server.use(urlencoded({ extended: true }));

// ROTAS
server.use(mainRoutes);

server.use((req,res) => {
    res.send('Página não encontrado');
});

// SERVIDOR RODANDO
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})