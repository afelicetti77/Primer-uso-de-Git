/*const http=require('http'); 

const server= http.createServer((req,res)=>{
    res.status=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, ()=>{
    console.log ('Servidor en puerto 3000')
});
*/ //hasta aca es un servidor generado con nodejs puro abajo uno generadocon express

const express=require('express'); //importo el modulo
const app= express();//app es mi servidor y lo inicio ejecutando mi variable express
//const app=(require('express'))(); expresion concatenada...invento mio


function logger(req,res,next) {// next es un parametro que hace que se ejecute la funcion y luego continue con la ruta siguiente
    console.log(`Se ha recibido la ruta: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//middlewares son funciones que se ejecutan antes de las rutas
app.use(express.json()); //con esta linea express puede leer formatos json
app.use(logger);
//en los middlewares se pueden usar los modulos instalados ejemplo morgan

//rutas
app.listen(3000,()=>{
    console.log('Servidor Express en puerto 3000')
});


app.get('/',(req,res)=>{
    res.send('Hola desde Express');
    console.log('Peticion al localhost');
});

//genero una nueva ruta
app.get('/nosotros',(req,res)=>{
    res.send('Esta es la pagina de nosotros');
    console.log('Peticion a la pagina nosotros');
});

//genero una nueva ruta con otro metodo
app.post('/form',(req,res)=>{
    res.send('Esta es la pagina Formulario Post');
    console.log('Peticion a la pagina formulario');
});

//genero una nueva ruta
app.put('/actualizar',(req,res)=>{
    res.send('Esta es la pagina de actulizar Put');
    console.log('Peticion a la pagina actualizar');
});

//genero una nueva ruta
app.delete('/borrar',(req,res)=>{
    res.send('Esta es la pagina de borrar Delete');
    console.log('Peticion a la pagina borrar');
});

//genero una nueva ruta con objetos json
app.get('/usuario1',(req,res)=>{
    res.json([{
        username: 'Alejandro',
        lastname:'Felicetti'
    }]);
    console.log('Peticion de datos');
});


//genero una nueva ruta con objetos json
app.post('/usuarionuevo',(req,res)=>{
    res.send('Se cargara un nuevo usuario');
    console.log('Carga de datos');
    console.log(req.body); //req.body me muestra el contenido de lo que viene del navegador
});

//recibo datos desde el body y desde la ruta
app.post('/otrousuario/:id',(req,res)=>{//el dato id viene en la ruta del navegador 
    res.send('Se cargara un nuevo usuario'); //ej http:localhost:3000/otrousuario/137
    console.log('Carga de datos');
    console.log(req.body); //req.body me muestra el contenido de lo que viene del navegador
    console.log(req.params);//req.params me trae el contenido que viene en la ruta
    console.log(`El usuario ${req.params.id} ha sido agregado`);//con comillitas y $ concateno el dato
});
