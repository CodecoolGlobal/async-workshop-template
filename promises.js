const random = (max) => Math.floor(Math.random() * (max + 1))

export const sleep = (waitingTimeMs) => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      fulfill()
    }, waitingTimeMs)
  })
}

export const getRandomNumber = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const max = 10;
      fulfill(random(max))
    }, 0)
  })
}

export const openSchrodringerBox = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      const isAlive = Math.random() > 0.5
      const catNames = ['Cirmi', 'Butyok', 'Kormi', 'Fluffy']
      const selectedCat = catNames[random(catNames.length - 1)]
      if (isAlive) {
        fulfill(selectedCat)
      } else {
        reject(new Error(`Ooops, right now ${selectedCat} has only 8 lives.`))
      }
    }, 0)
  })
}

export const getRandomNumberSlowly = async () => {
  await sleep(2000);
  return await getRandomNumber();
}
