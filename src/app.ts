import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import { getConnectionOptions, createConnection } from 'typeorm';
import { errors } from 'celebrate';

class App {
    public server = express();

    constructor() {
        this.database();
        this.middlewares();
        this.routes();
        this.server.use(errors()); // celebrate errors
    }

    /**
     * MIDDLEWARES DA APLICAÇÃO
     */
    middlewares() {
        this.server.use(express.json());
    }

    /**
     * ADICIONA AS ROTAS A APLICAÇÃO
     */
    routes() {
        this.server.use(routes);
    }

    /**
     * CRIA CONEXÃO BANCO DE DADOS
     */
    async database() {
        try {
            const databaseOptions = await getConnectionOptions();
            await createConnection(databaseOptions);
        } catch (err) {
            console.log(err);
        }
    }
}

export default App;
