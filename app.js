const express=require('express');

const morgan=require('morgan')
const rotaProduto=require('./rotas/produtos.js')
const rotaPedidos=require('./rotas/pedidos.js');

const res = require('express/lib/response');
const bodyParser=require('body-parser');

const app=express();


app.use(morgan('dev'));
app.use('/produtos',rotaProduto)
app.use('/pedidos',rotaPedidos)

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

app.use((rep,res,next)=>{
if(req.method==="OPTIONS"){
    res.header("acessos para" ,"PUT,POST,PATCH,DELETE,GET");
    return res.status(200).send({});
}
next();


    const erro=new Error('não encontrado');
    erro.status=404;
    next(erro)
})

app.use((error,req,rest,next)=>{
    res.status(error.status || 500 )
    return res.send({
        erro:{
            mensagem:error.mensage
        }
    })
});

module.exports=app;