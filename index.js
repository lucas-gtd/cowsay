const wilder = require('./information.js')
const cowsay = require('cowsay')

console.log(cowsay.say({
    text: `Salut ! Je suis ${wilder.name} du campus de ${wilder.campus}`
}))