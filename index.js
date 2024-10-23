class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    
    atacar(){
        let ataque = ""

        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada"
                break;
            case "mago":
                ataque = "magia"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
        
            default:
                ataque = "(nenhum ataque encontado para esse tipo)"
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
        
    }

}

let dadosHeroi = new heroi("Caio", "16", "monge");
dadosHeroi.atacar();