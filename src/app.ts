import express from 'express';
import 'dotenv/config';
import ejsMate from "ejs-mate";
import helmet from 'helmet';
import morgan from 'morgan';
import * as path from 'path';
import cors from "cors";

const app = express();
const port = process.env.PORT;

// Define o ejs-mate como engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(helmet({
//     crossOriginResourcePolicy: false,
// }));
app.use(cors({
    // origin: 'http://localhost:3000', 
    // credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.resolve('public')));

// Importando as rotas
import { registerRoutes } from './middlewares/routesMiddleware';
registerRoutes(app);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;