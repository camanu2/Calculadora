//calculadora de idade
/*console.log("está funcionando!");

let anoDeNascimento = window.prompt("Em que ano você nasceu?");
console.log (anoDeNascimento);

let resultado = 2023 - anoDeNascimento;
console.log (resultado);
alert("quem nasceu em " +  anoDeNascimento + " vai fazer " + resultado + " anos em 2023 ");
*/


//----------------------------------------------------------------------------------------------//
//calculadora de nota
//perguntar as notas e mostrar o resultado via função alert


let nota1 = parseFloat(window.prompt (" Nota do primeiro trimestre "));
console.log(nota1);
let nota2 = parseFloat(window.prompt ( "Nota do segundo trimestre"));
console.log(nota2)
let nota3 = parseFloat(window.prompt ( " Nota do terceiro trimestr "));
console.log(nota3);
 
let resultado = nota1 + nota2 + nota3;
if(resultado >= 180){
alert ( " Nota dos trimestres: " + resultado +" Aprovado ");

} else { 
    alert ( " Nota dos trimestres: " + resultado +" Reprovado ");
}






