const mongoose=require('mongoose')

const Documentos=mongoose.Schema({
    nameCompleto:{type:String,required:true},
    nameResponsavel:{type:String,required:true},
    
},
{
    timestamps:true  
})
module.exports=mongoose.model('Documentos',Documentos);