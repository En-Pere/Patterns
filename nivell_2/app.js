

class Jugador {
  constructor (nombre, apellido, puntuacion) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.puntuacion = puntuacion
  }
}

const jugador0 = new Jugador("pere", "ruiz", 40);
const jugador1 = new Jugador("antonio", "perez", 50);
const jugador2 = new Jugador("maite", "ruiz", 20);


const listaJugadores = [];

  //buscar un jugador
  buscarJugador = (numJugador) => {
    console.log(`El jugador ${numJugador} es:`)
    console.log(listaJugadores[numJugador]);
  };

  creaJugador = (datos) => {
    listaJugadores.push(datos);
  };

  topScore = () => {
    let maximo = 0;
    for (var i=0; i<listaJugadores.length; i++) {
    if(maximo < listaJugadores[i].puntuacion) {
    maximo = listaJugadores[i].puntuacion;
    }
  }
    console.log(`La puntuación máxima es: ${maximo}`);
  }

  quitarPuntuacion = (numJugador, nuevaPuntuacion) => {
    
  }

  // ESTA FUNCIÓN ESTÁ OK: --> buscaPuntuacion = () => {
  // listaJugadores.forEach(object =>{
  //   if(object.puntuacion > 20){
  //       console.log(`Puntuación máxima es ${object.puntuacion} del señor ${object.nombre}`);
  //     }
  //   });
  // };





  // buscaUnObjeto = () => {
  //   listaJugadores.find(object =>{
  //     let miLista = [];
  //     miLista.push(listaJugadores.puntuacion);
  //     console.log(miLista.length);
  //     var max = 0;
  //     for (var i=0; i<miLista.length; i++) {
  //       if(max > miLista[i]){
  //         max = miLista[i]
  //       }
  //     }
  //     console.log(miLista)     
  //   });
  // };


creaJugador(jugador0);
creaJugador(jugador1);
creaJugador(jugador2);

topScore();  
buscarJugador(0);
  


// console.log(marcador);

// buscaPuntuacion();
// console.log(listaJugadores.length);
// buscaUnObjeto();



// let miLista = [{ nombre: 'juan pirulo' }];

// let busquedaNombres = miLista.nombre;
// console.log(busquedaNombres);


// { nombre: 'cerezas', cantidad: 5 }

  // marcador = () => {
  //   return listaJugadores.find(puntuacion);
  // }

//   //crear un jugador
//   creaJugador: function(datos) {
//     this.listaJugadores.push(datos);
//   },

//   //mostrar todos los jugadores
//   mostrarTodos: function() {
//     return this.listaJugadores;
//   },

//   marcador: function() {
//     return listaJugadores.find(puntuacion);
//   }



// juego.creaJugador(jugador1);
// juego.creaJugador(jugador2);

// console.log(juego.mostrarTodos());
// console.log(juego.marcador());



