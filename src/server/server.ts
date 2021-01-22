import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import enviroment from '../configuration/enviroment';
import router from '../routes/router.routes';
export default class Server {
    
    private app: express.Application;
    private port: number;

    constructor(){
        
        this.app = express();
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());

        this.app.use('/api',router);

        this.port = parseInt(enviroment.PORT,10);
    }

    start(){
        this.app.listen(this.port,()=>{
            console.log(`Server is running in the port ${this.port}`);
        });
    }
}