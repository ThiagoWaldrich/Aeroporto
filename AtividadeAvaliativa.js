input = require("prompt-sync")();

let codigo = []
let nome = []
let origem = []
let destino = []
let aviao = 0
let nave = []
let numero_poltrona_Airbus = []
let numero_poltrona_Boeing = []
let numero_poltrona_Embraer = []
let avioes_empresa = ["Airbus", "Boeing", "Embraer"]
let identificacao_avioes = [0200, 0300, 0400]
let assentos_disponiveis_airbus = [24, 25, 13]
let assentos_disponiveis_boeing = [20, 22, 23]
let assentos_disponiveis_embraer = [12, 13, 14]
let passageiros_boeing = []
let passageiros_airbus = []
let passageiros_embraer = []

function dados() {

    console.log("O código dos voos", codigo)
    console.log("O nome dos passageiros", nome)
    console.log("A origem dos passageiros", origem)
    console.log("O destino dos passageiros", destino)
    console.log("O avião dos passageiros", aviao)
    console.log("Número das poltronas preenchidas do Boeing:", numero_poltrona_Boeing)
    console.log("Número das poltronas preenchidas do Airbus", numero_poltrona_Airbus)
    console.log("Número das poltronas preenchidas do Embraer:", numero_poltrona_Embraer)
}
function infoNave() {
    console.log("")
    console.log("A empresa conta com aviões das marcas " + avioes_empresa)
    console.log("O avião " + avioes_empresa[0] + " possui " + assentos_disponiveis_airbus.length + " assentos disponíveis")
    console.log("O avião " + avioes_empresa[1] + " possui " + assentos_disponiveis_boeing.length + " assentos disponíveis")
    console.log("O avião " + avioes_empresa[2] + " possui " + assentos_disponiveis_embraer.length + " assentos disponíveis")
}
function searchPass() {
    dlt = input("Informe o destino dos passageiros cujo você deseja verificar os dados: ")
    console.log(destino.includes(dlt))
    a = (destino.indexOf(dlt))
}
function passageiroDados() {
    console.log("=================================================")
    console.log("Código do passageiro:", codigo[a])
    console.log("Nome do passageiro:", nome[a])
    console.log("Origem de embarque do passageiro:", origem[a])
    console.log("Destino do passageiro:", destino[a])
    console.log("Sigla das aeronaves: Embraer = e; Boeing = b; Airbus = a")
    console.log("Avião do passageiro: ", nave[a])
    console.log("==========================================================")
}
function infoAlem() {
    y = input("Qual avião você deseja conferir os passageiros ?(Boeing[b], Airbus[a], Embraer[e]): ")
    if (y == "b") {
        console.log("Os passageiros da Boeing são: ", passageiros_boeing)
    }
    else if (y == "a") {
        console.log("Os passageiros da Airbus são: ", passageiros_airbus)
    }
    else if (y == "e") {
        console.log("Os passageiros da Embraer são ", passageiros_embraer)
    }
    else {
        console.log("Digite apenas empresas disponíveis")
    }
}

while (true) {
    codigo.push(input("Entre com o codigo do voo: "))
    x = (input("Entre com o nome do passageiro: "))
    nome.push(x)
    origem.push(input("Entre com a origem do passageiro: "))
    destino.push(input("Entre com o destino do passageiro: "))
    aviao = (input("Entre com aviao do passageiro: [b/a/e]"))
    nave.push(aviao)
    if (aviao == "b") {
        passageiros_boeing.push(x)
    }
    else if (aviao == "a") {
        passageiros_airbus.push(x)
    }
    else if (aviao == "e") {
        passageiros_embraer.push(x)
    }
    else {
        console.log("Digite apenas aeronaves disponíveis")
    }
    reserva = input("Deseja resevar uma poltrona nesse voo ? [s/n]")
    if (reserva == "s" ) {
        // voo = input("Em qual aeronave ?: [b/a/e]")
        if (aviao == "b") {
            poltrona = input("Temos as poltronas " + assentos_disponiveis_boeing + " disponíveis. Qual você deseja reservar ?: ")
            if (poltrona == 20) {
                assentos_disponiveis_boeing.shift()
                console.log("Você reservou a poltrona 20, agora resta(m) o(s) assento(s) " + assentos_disponiveis_boeing + " disponivel(is) no boeing")
                numero_poltrona_Boeing.push(20)
            }
            else if (poltrona == 22) {
                assentos_disponiveis_boeing.splice(assentos_disponiveis_boeing.indexOf(22),1)
                console.log("Você reservou a poltrona 22, agora resta(m) o(s) assento(s) " + assentos_disponiveis_boeing + " disponivel(is) no boeing")
                numero_poltrona_Boeing.push(22)
            }
            else if (poltrona == 23) {
                assentos_disponiveis_boeing.pop();
                console.log("Você reservou a poltrona 23, agora resta(m) o(s) assento(s) " + assentos_disponiveis_boeing + " disponivel(is) no boeing")
                numero_poltrona_Boeing.push(23)
            }
            else {
                console.log("Digite apenas numeros referentes a poltronas desocupadas...")
            }
        }
        else if (aviao == "a") {
            poltrona = input("Temos as poltronas " + assentos_disponiveis_airbus + " Disponíveis. Qual você deseja reservar ?: ")
            if (poltrona == 24) {
                assentos_disponiveis_airbus.shift();
                console.log("Você reservou a poltrona 24, agora resta(m) o(s) assento(s) " + assentos_disponiveis_airbus + " disponiveis no airbus")
                numero_poltrona_Airbus.push(20)
            }
            else if (poltrona == 25) {
                assentos_disponiveis_airbus.splice(assentos_disponiveis_airbus.indexOf(25),1)
                console.log("Você reservou a poltrona 25, agora resta(m) o(s) assento(s) " + assentos_disponiveis_airbus + " disponiveis no airbus")
                numero_poltrona_Airbus.push(25)
            }
            else if (poltrona == 13) {
                assentos_disponiveis_airbus.pop();
                console.log("Você reservou a poltrona 13, agora resta(m) o(s) assento(s) " + assentos_disponiveis_airbus + " disponiveis no airbus")
                numero_poltrona_Airbus.push(13)
            }
        }
        else if (aviao == "e") {
            poltrona = input("Temos as poltronas " + assentos_disponiveis_embraer + " Disponíveis. Qual você deseja reservar ?: ")
            if (poltrona == 12) {
                assentos_disponiveis_embraer.shift();
                console.log("Você reservou a poltrona 12, agora resta(m) o(s) assento(s) " + assentos_disponiveis_embraer + " disponiveis no embraer")
                numero_poltrona_Embraer.push(12)
            }
            else if (poltrona == 13) {
                assentos_disponiveis_embraer.splice(assentos_disponiveis_embraer.indexOf(13),1)
                console.log("Você reservou a poltrona 13, agora resta(m) o(s) assento(s) " + assentos_disponiveis_embraer + " disponiveis no embraer")
                numero_poltrona_Embraer.push(13)
            }
            else if (poltrona == 14) {
                assentos_disponiveis_embraer.pop();
                console.log("Você reservou a poltrona 14, agora resta(m) o(s) assento(s) " + assentos_disponiveis_embraer + " disponiveis no embraer")
                numero_poltrona_Embraer.push(14)
            }
        }
    }
    else if(reserva == 'n'){
        console.log("Não foi possível reservar poltronas")
    }
    poltrona = 0
    // numero_poltrona.push(input("Entre com o numero da poltrona: "))
    p = input("Deseja cadastrar outro passageiro ?: [S/N]")
    if (p == "S") {
        true
    }
    else if (p == "N") {
        break
    }
}
infoNave()
dados()
searchPass()
passageiroDados()
infoAlem()