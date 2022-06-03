const mongoose=require('mongoose')



const transferencia=mongoose.Schema({
    
    nameCompleto:{type:String,required:true},
    nameResponsavel:{type:String,required:true},
    serie:{type:String,required:true},
    solicitacao:{type:String,required:true},
    
    
   
},
{
    timestamps:true  
})
module.exports=mongoose.model('transferencia',transferencia)