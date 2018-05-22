const myPromise = function(msg, nome, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg}, seja bem vindo ${nome}!`), timeout)
    })
}

myPromise("Olá", "Antonio", 100).then((msg) =>
    myPromise(msg, "Carlos", 200) // recursão
).then((msg) => {
    console.log(`finalizado após 300ms:${msg}`)
})