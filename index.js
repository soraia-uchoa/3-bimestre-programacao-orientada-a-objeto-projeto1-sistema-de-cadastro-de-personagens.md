const Personagem = require("./class/Personagem")

const mago = new Personagem("soraia", "mago", 9000)

const guerreiro = new Personagem("caio", "guerreiro", 300)

const arqueiro = new Personagem("everson", "arqueiro", 200)


mago.atacar()
mago.mostrarInformacoes()

guerreiro.atacar()
guerreiro.mostrarInformacoes()

arqueiro.atacar()
arqueiro.mostrarInformacoes()