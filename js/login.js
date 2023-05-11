

function insereNumero(botao,visor) {

    const meuBotao = document.getElementById(botao);
    const meuVisor = document.getElementById(visor);

    meuVisor.value += meuBotao.value;

}

function resultado(visor) {
    const meuVisor = document.getElementById(visor);
    let novoVisorSemSimbolos = meuVisor.value.split("+");
 
    let total = 0;
 
    novoVisorSemSimbolos.forEach((nr)=>{
        total +=  parseInt(nr);
    });
    console.log(total);
}