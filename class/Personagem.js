class Personagem {
    #pontoDeVida
    constructor(nome, classe, pontoDeVida) {
        this.nome = nome
        this.classe = classe
        this.#pontoDeVida = pontoDeVida
    }

    atacar() {
      console.log(`o personagem ${this.nome} atacou`)

    }

    mostrarInformacoes() {
        console.log(`nome do personagem: ${this.nome}, classe do personagem: ${this.classe}, ponto de vida: ${this.#pontoDeVida}`)
    

    }
    
}

module.exports = Personagem