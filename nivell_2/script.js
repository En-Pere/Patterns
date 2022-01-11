// // // //nivell2
// // // Singleton
// // // Construeix una aplicació que creï diversos Jugadors. 
// // // Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
// // // L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï. 
// // // La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.

// // //función creadora de objetos

// class Persona {
//   constructor (nombre, apellido, puntuacion) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.puntuacion = puntuacion;
//   }
//   //Getter
//   get presentacion() {
//      return this.frase();
//    }
//   // Método
//   frase () {
//     return `Mi nombre es: ${this.nombre} y tengo ${this.puntuacion}`;
//   }
// }

// const persona1 = new Persona('Antonio', 'Miró', 50);
// const persona2 = new Persona('mari', 'carmen', 80);
// const persona3 = new Persona('salva', 'toc', 90);


// console.log(persona1.presentacion); // 100

// const alumnos = {
//   // Todos los alumnos
//   listaAlumnos : [],

//   // Obtener un alumno
//   get: function(id) {
//        return this.listaAlumnos[id];
//   }, 

//   // Crear un alumno
//   crear: function(datos) {       
//        this.listaAlumnos.push(datos);
//   }, 

//   // Listar todos los alumnos
//   listado: function() {
//        return this.listaAlumnos;
//   }
// }

// const infoAlumno = {
//   nombre: 'Jesus', 
//   edad: 30
// }
// const infoAlumno2 = {
//   nombre: 'Juan',
//   edad: 20
// }

// alumnos.crear(infoAlumno);
// alumnos.crear(infoAlumno2);

// const listado = alumnos.listado();
// console.log(listado);
// //(2) [{…}, {…}]
// //0: {nombre: "Jesus", edad: 30}
// //1: {nombre: "Juan", edad: 20}

// const alumno = alumnos.get(0);
// console.log(alumno);
// //{nombre: "Jesus", edad: 30}


// class Marcador {
//   constructor(score) {
//     this.score = score
  
//   if (typeof Marcador.instance === 'object') {
//     return Marcador.instance;
//   }
//   Marcador.instance = this
//   return this;
// }
// };

// const marcador1 = new Marcador (10);
// console.log(marcador1);
// const marcador2 = new Marcador (2);
// console.log(marcador2);




// let valor1 = document.getElementById('valor1');
// let valor2 = document.getElementById('valor2');

// console.log(valor1.value);

//------------

// var numeroJugadores = prompt('Dime el número de jugadores');
// var arrayJugadores = [];


// for (var i=1; i<numeroJugadores; i++) {
  
//   prompt("dime el nombre del jugador " + i);

// }

// document.write(arrayJugadores);

// var listaNombres = [];


// var numeroJugadores;
// numeroJugadores = prompt('Dime el número de jugadores');

// function names() {
//   var nombres;
//   for (i = 1; i <= numeroJugadores; i++) {
//       nombres = prompt("dime el nombre del jugador " + i);
//       listaNombres.push(nombres);
//   }
//   return
// }
// names();

// function puntuaciones() {
//   var puntos;
//   for (i = 0; i<=2; i++) {
//     puntos = prompt("inserta la puntuación de " + listaNombres[i]); 
//     listaNombres.push(puntos);
//   }
// }
// puntuaciones();

// document.write(listaNombres);

//-----------------

// var arrayUsuarios = new Array(2)

// function Usuario (nombre,apellido,puntuacion){ // defino la clase Usuario, notar que le quite el ultimo parametro, solo por gusto personal
 
//   this.nombre=nombre;
//   this.apellido=apellido;
//   this.puntuacion=puntuacion;
//   }



//   var nombre=document.getElementById('nombre').value;
//   var apellido=document.getElementById('apellido').value;
//   var puntuacion=document.getElementById('puntuacion').value;

// function altaUsuario(){
//   for(i = 0; i<arrayUsuarios.length; i++){
//     arrayUsuarios[i] = new Usuario("nombre","apellido","puntuacion");
//      }
// };

// altaUsuario();

// document.write(arrayUsuarios);










