function insert(num) {
    var numero = document.getElementById('container-visor').innerHTML;
    document.getElementById('container-visor').innerHTML = numero + num; 
}

function limpar() {
    document.getElementById('container-visor').innerHTML = "";
}

function voltar() {
    var visor = document.getElementById('container-visor').innerHTML;
    document.getElementById('container-visor').innerHTML = visor.substring(0, visor.length -1);
}

function calcular() {
    try {
        var visor = document.getElementById('container-visor').innerHTML;
        document.getElementById('container-visor').innerHTML = eval(visor);
    } catch (error) {
        visor.valueOf = '';
        console.error("Erro de sintaxe:", error);
        document.getElementById('container-visor').innerHTML = '';
    }
    
}