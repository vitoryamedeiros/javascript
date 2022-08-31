const valorIngressoAdulto = 20;
let valordoIngressoAdulto = 30; /*string literal */
console.log(valorIngressoAdulto);
console.log(valordoIngressoAdulto);
/*usar const sempre*/
/*let só quando for alterar os valores*/ 

let nome = 'tory'; //string literal
let idade = 12; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; // undefined
let corSelecionada = null; // redefinir valor

let pessoa = { 
    nome: 'tory',
    idade: 12,
    estaAprovado: true,
    sobrenome: 'medeiros',
    estadoCivil: 'solteira',
    profissao: 'desenvolvedora',
};
console.log (pessoa);


// Arrays
let familia = [true, 46, 'jonathan', 44];
console.log(familia.length);
console.log(familia[0]);
let namoradinho = ['Glebso', 18, 'Caixadagua']
console.log (namoradinho);



// FUNÇÃO: Verbo + Substantivo
let corSite = "azul";
function resetaCor (cor, tom){
    corSite = cor + ' ' + tom;
};
console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);



//Realiza uma tarefa, mas não devolve nada
function dizerNome (){
    console.log('vitorya');
}

dizerNome();
// faz o calculo e retorna algo
function MultiplicarPor2(valor){
    return valor*2;
}
console.log(MultiplicarPor2(5));
let resultado = MultiplicarPor2 (5);
console.log(resultado);


//Operadores Aritiméticos (+, -, *, /, ** exponencial, --, ++)
let salario = 100;
console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);

let Idade = 20;
console.log(Idade++);
console.log(Idade)

//Operadores Atribuição 
let valorTeclado = 100;
valorTeclado += valorTeclado //*2
console.log(valorTeclado);


// Operadores Igualdade //

// igualdade restrita
console.log (1===1);
console.log ('1' === 1);
// igualdade solta
console.log (1 == 1);
console.log ('1' == 1);

//Operadores Comparação/Ternário
//cliente, 100 premium, comum
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log (tipo);


//Operadores Lógicos//

// (&& retorna true se ambos forem true) /console.log(true && true);/
let maiorIdade = true;
let clt = true ;
let provado = maiorIdade && clt;

console.log(provado);

// (||)retorna true se um valor for true
let sabeJs = true;
let sabeHtml = false;
let aprovado = sabeJs || sabeHtml;
console.log('pode aplicar: ',aprovado);

// (!) NOT
let candidatoRecusado = !aprovado;
console.log('candidato recusado ',candidatoRecusado);

//Operadores Bitwise
// Falsy: undefined, null, 0, false, '', NaN - not a number
// Truthy:
let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;
console.log (a);
console.log (b);

// If .. Else
//se a hora estiver entre 06:00 até 12:00 : Bom Dia!
//se a hora estiver entre 12:01 até 18:00 : Boa Tarde!
// Caso contrário: Boa noite

let hora = 22;
if (hora > 6 && hora < 12) {
    console.log ("Bom Dia");
}
else if (hora > 12 && hora < 18 ) {
    console.log ("Boa Tarde");
}
else {
    console.log("Boa Noite");
}

// Switch .. case
let permissao; //comum, gerente, diretor
permissao = 'gerente';
switch (permissao){
    case 'comum' :
        console.log('Usuario Comum');
    break

    case 'gerente' :
        console.log('Usuario Gerente');
    break;

    case 'diretor' :
        console.log('Usuario Diretor');
    break;

    default:
    console.log ('Usuario Não Reconhecido');
}

//LOOPINGS

//FOR
for (let i = 5; i >= 1 ; i--) {
    if (i % 2!== 0){
       console.log (i);
    }
}
//WHILE LOOP
let i = 5;
while (i >= 1) {
    if (i % 2!== 0){
        console.log (i);
     }
}
//DO..WHILE
//FOR..IN
//FOR..OF