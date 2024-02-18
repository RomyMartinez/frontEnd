const esperaAi = (msg, tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof msg === 'number' ? reject('Numero') : resolve(msg)
    }, tempo)
  })
}

const executar = async () => {
  const oi = await esperaAi('oi', 4000)
  console.log(oi)
  const matriz = await esperaAi('matriz', 2000)
  console.log(matriz)
  const ultimo = await esperaAi('ultimo', 10000)
  console.log(ultimo)
}

executar()
