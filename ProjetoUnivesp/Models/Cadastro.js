const mongoose=require('mongoose')



const cadastro=mongoose.Schema({
    
    nameCompleto:{type:String,required:true},
    nameResponsavel:{type:String,required:true},
    endereco:{type:String,required:true},
    cep:{type:String,required:true},
    bairro:{type:String,required:true},
    cidade:{type:String,required:true},
    estado:{type:String,required:true},
    telefone:{type:Number,required:true},
    telefoneRec:{type:Number,required:true},
    email:{type:email,required:true},
    dataNasc:{type:data,required:true},
    
   
},
{
    timestamps:true  
})
module.exports=mongoose.model('cadastro',cadastro)