const cadastro=require('../Models/Cadastro')
const homologacao=require('../Models/HomologacaoModel')
const uniforme =require('../Models/Uniforme')
const transferencia=require('../Models/Tranferencia')

module.exports=class PiController{
    static createCadastro(req,res){
        res.render('/Cadastro')
    }
}