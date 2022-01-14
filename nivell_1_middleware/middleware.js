const funciones = require('./funciones');
const numeros = require('./numeros.json');

var num1 = numeros.num1
var num2 = numeros.num2

const App = () => {
  const middlewares = []

  const use = funct => middlewares.push(funct);

  const runMiddlewares = (index) => {
    const rounds = middlewares.length
    if (index < rounds)
    middlewares[index].call(null, () => runMiddlewares(index+1))
  }

  const get = () => {
    runMiddlewares(0)
    console.log('*END*')
  }

  return {
    get,
    use
  }
}

const app = App()

app.use((next) => {
  console.log((funciones.suma(num1,num2))**2)
  next()
})
app.use((next) => {
  console.log(funciones.resta(num1,num2)**3)
  next()
})
app.use((next) => {
  var div = num1/2
  var div2 = num2/2
  console.log(funciones.multiplicacion(div,div2))
  next()
})
app.get();