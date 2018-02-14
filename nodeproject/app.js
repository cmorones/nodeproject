var express = require("express");
var app=express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_component'));

app.get('/',function(req,res){
    res.send('Hola Mundo');
    
});

app.get('/routing',function(req,res){
    res.send('Hola routing');
    
});

app.listen(port,function(err){ 
    console.log('Server funcionando en puerto:' + port);
});