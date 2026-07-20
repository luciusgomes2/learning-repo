// Solução primeiro exercicio - criar função para cumprimentar
function cumprimentar(nome){
    return(`Olá ${nome}!`);
}
console.log(cumprimentar('Lúcius'));

// Solução exercicio dois - transformar anos em dias
function idadeEmDias(idade){
    return `Se você tem ${idade} anos, então você possui ${idade * 365} dias de vida.`; 
}
console.log(idadeEmDias(25));

// Solução terceiro exercicio - Calcular salario
function calcularSalario(qtdHorasTrabalhadasMes, valorDaHora){
    return `Salário igual à R$ ${qtdHorasTrabalhadasMes*valorDaHora}.`;
}
console.log(calcularSalario(150, 40.5));


// Solução quarto exercicio - Verificar mes de acordo com numero passado
function numeroDoMes(numero){
    if(typeof numero === 'number') {
    switch (numero) {
        case 1 : 
        return "Janeiro"
            break;
        case 2 : 
        return "Fevereiro"
            break;
        case 3 :
        return "Março"
            break;
        case 4 : 
        return "Abril"
            break;
        case 5 : 
        return "Maio"
            break;
        case 6 : 
        return "Junho"
            break;
        case 7 : 
        return "Julho"
            break;
        case 8 : 
        return "Agosto"
            break;
        case 9 : 
        return "Setembro"
            break;
        case 10 :
        return "Outubro"
            break;
        case 11 : 
        return "Novembro"
            break;
        case 12 : 
        return "Dezembro"
            break;
    
        default: 
        return "Por gentileza, insira um numero valido entre 1 e 12"
            break;
        }
    }else{
    return "Por favor digite apenas numeros, de acordo com o mês do ano";
}}
console.log(numeroDoMes(1111));

// Solução quinto exercicio - retornar se o primeiro é maior ou igual o segundo.

function eMaiorOuIgual(num1, num2){
    if(num1 >= num2){
        return `O numero ${num1} é maior ou igual ao ${num2}`;
    }else{
        return 'Negativo'
    }
}
console.log(eMaiorOuIgual(10, 8));

function retornaInverso(parametro){
    if(typeof parametro === 'number'){
        return -parametro;
    }else if(typeof parametro === 'boolean'){
        return !parametro;
    }else{
        return "Booleano ou número esperados, mas o parametro é do tipo string"
    }
}
console.log(retornaInverso(false));
console.log(retornaInverso(-15))
console.log(retornaInverso("15"));

// Solução sexto exercicio
function estaEntre(numero, minimo, maximo, inclusivo){
    
}


