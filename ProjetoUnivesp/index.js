const express=require('express')
const cors=require('cors')
const connectMongoDb=require('./db/conn')
//nodeconst PiRoutes =require('./Routes/PiRoutes')

const app = express();
app.use(cors());
app.use(express.json());
//app.use('/',PiRoutes)
app.get('/Home.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Home.html`)
})
app.get('/Documentos.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Documentos.html`)
})
app.get('/Vagas.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Vagas.html`)
})
app.get('/Homologacao.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Homologacao.html`)
})
app.get('/Sobre.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Sobre.html`)
})

app.get('/Uniforme.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Uniforme.html`)
})
app.get('/Transferencia.html',(req,res)=>{
    res.sendFile(`${__dirname}/views/Telas/Transferencia.html`)
})


async function createServer() {
    await connectMongoDb().catch((err) => {
        console.log(`Error connecting to mongoDb. ${err}`);
    });

    app.listen(3000, console.log('Conectado na porta 3000'));
}

createServer();