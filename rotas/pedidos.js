const text = require('body-parser/lib/types/text');
const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'retorna dados do formulario'
    })
});

router.post('/',(req,res,next)=>{

    const formulario={
        id:req.body.id,
        nome:req.body.nome,
        data:req.body.data,
        sobrenome:req.body.sobrenome,
        online:req.body.ativo
    }
    res.status(200).send({
        mensagem:'O formulario foi criado',
        formulario_enviado:formulario
    })
})

router.get('/:id_produto',(req,res,next)=>{
    const id=req.params.id_produto
   
        
    res.status(200).send({
        mensagem:'detalhes do formulario'
    })


})


router.patch('/', (req,res,next)=>{
    res.status(201).send({
        mensagem:'enviado pelo patch'
    })
})

router.delete('/', (req,res,next)=>{
    res.status(201).send({
        mensagem:'pedido foi excluido'
    })
})
module.exports=router