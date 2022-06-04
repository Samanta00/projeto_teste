const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:'retorna dados do formulario'
    })
});

router.post('/',(req,res,next)=>{

    const relatorio_formulario={
        id:req.body.id,
        template_name:req.body.template_name,
        position:req.body.position
        
    }

    res.status(200).send({
        mensagem:'O formulario foi comentado',
        formulario_comentado:relatorio_formulario
    })
})




router.get('/:id_produto',(req,res,next)=>{
    const id=req.params.id_produto
    if(id==='especial'){
        
    res.status(200).send({
        mensagem:'detalhes do formulario'
    })

    }

    else{
        res.status(200).send({
            mensagem:'caiu no else'

        })
    }

})


router.patch('/', (req,res,next)=>{
    res.status(201).send({
        mensagem:'enviado pelo patch'
    })
})

router.delete('/', (req,res,next)=>{
    res.status(201).send({
        mensagem:'enviado pelo delete'
    })
})
module.exports=router