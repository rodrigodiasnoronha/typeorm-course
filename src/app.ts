import express from 'express';
import routes from './routes';
import { getConnectionOptions, createConnection } from 'typeorm';

class App {
    public server = express();

    constructor() {
        this.database()
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

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
