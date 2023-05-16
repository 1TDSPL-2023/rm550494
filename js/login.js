

function insereNumero(botao,visor) {
    if (botao.value == "+" || botao.value == "-" || botao.value == "+" || botao.value == "/") {

        visor.value += botao.value; 
        console.log(visor.value[visor.lenght - 1]); 

        
    }else{
        visor.value += botao.value;
    }
}
function resultado(visor){
    visor.value = eval(visor.value); 

}



//TRANSFORME A FUNÇÃO EM UMA FUNÇÃO QUE RECEBA TODAS AS OPERAÇÕES
function resultado(visor) {
    const meuVisor = document.getElementById(visor);
    let novoVisorSemSimbolos = meuVisor.value.split("+");
 
    let total = 0;
 
    novoVisorSemSimbolos.forEach((nr)=>{
        total +=  parseInt(nr);
    });
    console.log(total);
}
