const mongoose=require('mongoose')



const uniforme=mongoose.Schema({
    
    nameCompleto:{type:String,required:true},
    nameResponsavel:{type:String,required:true},
    tamanhoRoupa:{type:String,required:true},
    tamanhoTenis:{type:String,required:true},
    
    
   
},
{
    timestamps:true  
})
module.exports=mongoose.model('uniforme',uniforme)