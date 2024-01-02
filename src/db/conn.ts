export const mongoose = require('mongoose')

const main = async () => {
    try {
        await mongoose.connect("mongodb+srv://andrefersouza:Hysm24DQFXAClos7@cluster0.t4cc48p.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao MongoDB.")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;