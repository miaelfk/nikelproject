const nome = "Sâmia El Fakih França";
let nome2 = "";
let pessoaDefault = {
    nome: "Larissa Lopes",
    idade: "25",
    trabalho: "Estilista"
}

let nomes = ["Larissa Lopes", "Luara Nunes", "Gabriela Damaceno"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Larissa Lopes",
        idade: "25",
        trabalho: "Estilista"
    },
    {
        nome: "Soraia Fernandes",
        idade: "29",
        trabalho: "GrowDever"
    }
];



function alterarNome() {
    nome2 = "Luara Nunes";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoas(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){

    console.log("-----------IMPRIMIR PESSOAS----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
        
    })
}

imprimirPessoas();

adicionarPessoa({
        nome: "Maya",
        idade: "35",
        trabalho: "Atriz"
    });

imprimirPessoas();


//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Soraia Fernandes",
//    idade: "29",
//    trabalho: "GrowDever"
// });

//recebeEAlteraNome("Talita Gomes");
//recebeEAlteraNome("Mariana Souza");

// alterarNome();