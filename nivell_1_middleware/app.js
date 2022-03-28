const funciones = require('./funciones');
const numeros = require('./numeros.json');
const app = require('./middleware');

var num1 = numeros.num1
console.log(`El número 1 es: ${num1}`);
var num2 = numeros.num2
console.log(`El número 2 es: ${num2}`);

app.use((next) => {
  console.log(`El cuadrat de ${num1} + ${num2} es:`)
  console.log((funciones.suma(num1,num2))**2)
  next()
})
app.use((next) => {
  console.log(`El cub de ${num1} - ${num2} es:`)
  console.log(funciones.resta(num1,num2)**3)
  next()
})
app.use((next) => {
  var div = num1/2
  var div2 = num2/2
  console.log(`${num1}/2 i ${num2}/2 multiplicats entre ells és:`)
  console.log(funciones.multiplicacion(div,div2))
  next()
})
app.get();