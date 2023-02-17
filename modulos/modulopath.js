const path = require('path');


//crea, junta salida adecuada deacuerdo al sistema operativo
const filejoin = path.join('consumible', '/propiedades', 'etc,js');
console.log(filejoin);


//la base de la ruta donde termina
const filebasename = path.filebasename(filejoin);
console.log(filedirname);

//de la ruta pero en forma de objeto
const fileparse = path.parse(filejoin);
console.log(fileparse);

//
const fileresplver = path.resolver(filejoin);
console.log(fileresolver);
 

//CODIGO SINCRONICO

fs.readFile('../data/on.js', 'utf-8', (err,data)=> {
    if(err) {
        console.log(err)
    }
    console.log(err) 
}); 