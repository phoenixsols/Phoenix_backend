import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import methodOverride from "method-override"
export default class Bootstrap{

    constructor(app){
        this.app = app;

    }
    middleware(){
        const {app} = this;
        app.use(cors);
        app.use(
            bodyParser.urlencoded({
                extended:false,
            }),
        );
        app.use(bodyParser.json({limit:"2000mb"}));
        app.use(compression());
        app.use(methodOverride());
        app.use(
            helmet({
                contentSecurityPolicy:false,
                referrerPolicy:false,
                originAgentCluster:false
            }),
        );
    }

    connectDb(){

    }

    start(){
        const {app} = this;
        const port = app.get("port");
        const server = app.listen(port,()=>{
            console.log("Server started on port %d",port);
        })
    }
}