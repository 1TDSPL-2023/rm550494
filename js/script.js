//Atrelando o evento click ao elemneto h2
const h2Element = document.getElementById("titulo"); 

h2Element.addEventListener("click", ()=>{ 
    //Math função matemática...
    //os métodos floor, round e ceil eles arredondam os números passados. 
    //o método randon gera um número entre 0 e 1. Ex: 0.1233. 
    let r = ""; 
    let g = ""; 
    let b = "";

    r = Math.random(Math.random()*255); 
    g = Math.random(Math.random()*255); 
    b = Math.random(Math.random()*255); 
    console.log(r); 

    this.textContent = "NOVO TÍTULO"; 
    h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`);    
    //h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");");     
    //alert(this.textContent);
});
