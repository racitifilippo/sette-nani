export class Nano{

    numero: number
    nome: string
    nani = [
        'Dotto',
        'Brontolo',
        'Pisolo',
        'Mammolo',
        'Gongolo',
        'Eolo',
        'Cucciolo'
    ]

    constructor(id: number){
        this.numero = id
        this.nome = this.nani[id]
    }

 
}