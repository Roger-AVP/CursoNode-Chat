var express = require('express'),
    app = express();
    var bodyParser = require('body-parser');

    var port = process.env.PORT || 8080;

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(express.static(__dirname+'/public'))

    function contenido (request,response){
         response.sendFile(__dirname+'/index.html')
       // response.send('cambios')
       
    }

   app.get('/',contenido).listen(port,function(){
       console.log('Servidor ejecutado')
   }); 

   app.get('/login',function(solicitud,respuesta){
       respuesta.sendfile(__dirname + '/views/login.html')
   })

   app.get('/register',function(solicitud,respuesta){
    respuesta.sendfile(__dirname + '/views/register.html')
    })

    app.post('/auth',function(solicitud,respuesta){
        // respuesta.send('su email es: '+ solicitud.body.email)
        respuesta.redirect('/home')
    })

    app.post('/data',function(solicitud,respuesta){
        let user ={
            name: 'Alexander'
        }
        respuesta.send(user.name)
    })

    app.get('/home',function(solicitud,respuesta){
        respuesta.sendFile(__dirname + '/views/home.html')
    })

