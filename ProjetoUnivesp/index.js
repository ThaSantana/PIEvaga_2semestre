const express=require('express')
const cors=require('cors')
const connectMongoDb=require('./db/conn')
//nodeconst PiRoutes =require('./Routes/PiRoutes')

const app = express();
app.use(cors());
app.use(express.json());
//app.use('/',PiRoutes)


async function createServer() {
    await connectMongoDb().catch((err) => {
        console.log(`Error connecting to mongoDb. ${err}`);
    });

    app.listen(3000, console.log('Conectado na porta 3000'));
}

createServer();