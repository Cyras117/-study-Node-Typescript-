import express, { request, response } from 'express';
import { rotas } from './routes';

const app = express();


app.get('/',rotas);

app.listen(3333);