const pipo={}; // creo un objeto


function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}



pipo.agregar=add;
pipo.resta=substract; //agrego propiedades al objeto Math

module.exports=pipo; // exporto el objeto Math

//al exportar no importa el nombre que yo le ponga al modulo que exporto,
//lo que importa es el nombre que le pongo a la funcion despues del punto
//por ejemplo en pipo.agregar el archivo index2 va a tomar la funcion agregar.

