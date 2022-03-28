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

module.exports = app;

