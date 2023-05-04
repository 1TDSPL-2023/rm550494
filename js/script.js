//Atrelando o evento click ao elemneto h2
//const h2Element = document.getElementById("titulo"); 

//h2Element.addEventListener("click", ()=>{ 
    //Math função matemática...
    //os métodos floor, round e ceil eles arredondam os números passados. 
    //o método randon gera um número entre 0 e 1. Ex: 0.1233. 
    //let r = ""; 
    //let g = ""; 
    //let b = "";

    //r = Math.random(Math.random()*255); 
    //g = Math.random(Math.random()*255); 
    //b = Math.random(Math.random()*255); 
    //console.log(r); 

    //this.textContent = "NOVO TÍTULO"; 
    //h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);    
    //h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");");     
    //alert(this.textContent);




    //Diferença entre VAR/LET
    //Você pode declarar o que quiser! 

    //var nome1 = "Mari"
    //let nome2 = "Theus"

        /*
        VAR - Ele vale apenas dentro da função onde ela foi declarada 
        LET - Promove este escopo mais limitado.
        */
    
    //CONST 
    //const nome3 = "Leo"; //trabalho de constantes (um valor que não muda)
        /*
        01. REGRA: em uma declaração você deve inicializar uma constante (ou seja passar um valor)
        02. REGRA: não se pode alterar uma constante durante o fluxo do programa.  
        */

//Iterando ARRAYS
    //let frutas = ["uva", "laranja", "banana", "maça", "abacate"]; 
    //console.log("Minhas frutas: " + frutas); 

    //frutas.forEach( (fruta)=>{
        //console.log(fruta)
    //} ); 

   //let nr1 = [1,2,3,4,5];
    //let nr2 = [6,7,8,9,10]; 


    //Ao invés de concatenar os arrays vamos utilizar o operador SPREAD( ... ) para melhorar a inserç~Qao dos dados no novo array.
    //CONCATENAÇÃO DE ARRAYS: 
    //let nr3 = [nr1,nr2]; 
    //let nr3 = [...nr1,...nr2];

    //IMPRIMINDO O NOVO ARRAY CONCATENADO
    //console.log("NOVO ARRAY : " + nr3); 
    //APLICANDO O forEach no novo array
    //nr3.forEach((nr)=>{ 
        //console.log("ITENS DO NOVO ARRAY: " + nr); 
    //})

    const aElements = document.getElementsByTagName("a"); 
    console.log(aElements);
    const aElementsArray = [...aElements];
    console.log(aElementsArray); 

    //Imprimindo atributos dos elementos recuperados...
    aElementsArray.forEach((a)=>{
        console.log(a.textContent)
    })
