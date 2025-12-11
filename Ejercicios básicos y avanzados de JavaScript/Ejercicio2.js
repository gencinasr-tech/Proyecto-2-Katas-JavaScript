const jedi = {nombre: "Luke Skywalker", edad: 19};
      jedi.edad = 25;
 let datos = {
  nombre: "Leia",
  apellido: "Organa",
  edad: 20,
 };
 const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
 const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

 let preciototal = sable1.precio + sable2.precio;

 let precioBaseGlobal = 25000; 

 const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };

 const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

 nave1.precioFinal = nave1.precioBase + precioBaseGlobal;

 nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

 console.log("Soy " + datos.nombre +" " + datos.apellido + " tengo " + datos.edad + " y soy una princesa de Alderaan.");
 console.log("El precio total de dos sables de luz es " + preciototal);
