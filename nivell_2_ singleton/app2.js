const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

// console.log('1- agregar jugador \n2- eliminar jugador \n3- mostrar marcador \n4- sumar puntos');

// var respuestas;

// rl.question("Elige una opción del 1 al 5: \n", (answer) => {
//   respuestas = answer;
//   console.log("Has elegido " + answer);
//   rl.close();
// })


// if (respuestas <1) {
//   console.log("respuestas no valida")
// } else {
//   console.log("todo ok")
// }



//respuestas = 2;



  // function eligeOpcion() {
  //   return new Promise(resolve => {
  //     rl.question("Elige una opción del 1 al 5: \n", (answer) => {
  //       respuestas = answer;
  //       resolve("Has elegido " + answer);
  //       rl.close();
  //     })
  //   })
  // }
  // eligeOpcion()
  //   .then(answer =>{
  //     console.log(answer);
  // }).catch(() => {
  //     console.log('Algo salió mal');
  // });

//   var respuesta = "";

//   const question1 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('Elige una opción: \n1- agregar jugador \n2- eliminar jugador \n3- mostrar marcador \n4- sumar puntos \n? ', (answer) => {
//         respuesta = answer;
//         console.log(`Has elegido: ${answer}`)
//         resolve()
//       })
//     })
//   }
  
//   const question2 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('1- agregar jugador \n2- eliminar jugador \n3- mostrar marcador \n4- sumar puntos \n? ', (answer) => {
//         respuesta = answer;
//         console.log(`Has elegido: ${answer}`)
//         resolve()
//       })
//     })
//   }
//   const question_name = () => {
//     return new Promise((resolve, reject) => {
//         rl.question("What's your name?\n", opciones => {
//             if (opciones = 1) {
//                 resolve("mierda pa ti");
//             } else {
//                 resolve(question_name());
//             }
//         });
//     });

// };


  
//   const main = async () => {
//     await question1()
//     await question2()
//     await question_name()
//     rl.close()
//   }
  
//   main()


//   // imprimirMenu = () => {
//   // console.log('1- agregar jugador \n2- eliminar jugador \n3- mostrar marcador \n4- sumar puntos');
//   // }

//   // empiezaOtravez = () => {
//   //   console.log('TU OPCIÓN NO EXISTE, SELECCIONA UNA OPCIÓN VÁLIDA')
//   //   return imprimirMenu();
//   // }

var respuesta = "";
const menuOpciones = () => {
  return new Promise((resolve) => {
    rl.question('1- agregar jugador \n2- eliminar jugador \n3- mostrar marcador \n4- sumar puntos \n? ', (answer) => {
      respuesta = answer;
        console.log(`Has elegido: ${answer}`)
        resolve()
      });
  });

};

const question_surname = () => {
  return new Promise((resolve) => {
      rl.question("What's your surname?\n", surname => {
          if (surname) {
              resolve(surname);
          } else {
              resolve(question_surname());
          }
      });
  });
};

const askUser = async () => {
  const userSurname = await menuOpciones();
  const userName = await question_surname();
  console.log(`Hi, ${userName} ${userSurname}`);
  rl.close();
};

askUser();
