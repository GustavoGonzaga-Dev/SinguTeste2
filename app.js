function EX1() {
    var texto1 = "";
    texto1 = document.querySelector("#f1");
    var texto2 = "";
    texto2 = document.querySelector("#f2");

    if (texto1.value == "" || texto2.value == "") {
        alert('Preencha todos os campos desta seção');
    } else {
        if (texto1.value.length > texto2.value.length) {
            alert('A frase maior é: \n' + texto1.value);
        } else if (texto1.value.length < texto2.value.length) {
            alert('A frase maior é: \n' + texto2.value);
        } else if (texto1.value.length == texto2.value.length) {
            alert('As duas frases tem o mesmo tamanho');
        }
    }
}

function EX2() {  //esse aqui eu não entendi muito bem o que era pra ser feito, então ta aqui o que eu achei o certo :3 s2
    var igual = "60df@t43r2";
    var texto1 = "";
    texto1 = document.querySelector("#f3");
    var texto2 = "";
    texto2 = document.querySelector("#f4");
    var maior = "";
    if (texto1.value == "" || texto2.value == "") {
        alert('Preencha todos os campos desta seção!');
    } else {
        maior = funcaoDoEx2(texto1, texto2, maior)
        if (maior.value == igual.value) {
            alert('As duas frases tem o mesmo tamanho');
        } else {
            alert('A frase maior é: \n' + maior.value);
        }
    }
}

function funcaoDoEx2(texto1, texto2, maior) {
    if (texto1.value.length > texto2.value.length) {
        maior = texto1;
    } else if (texto1.value.length < texto2.value.length) {
        maior = texto2;
    } else if (texto1.value.length == texto2.value.length) {
        maior = "60df@t43r2";
    }
    return maior;
}

function EX3() {
    var seuNome = "Gustavo"
    var NomePai = "Jose"
    var NomeMae = "Maria"
    var suaIdade = "20"
    var IdadePai = "56"
    var IdadeMae = "50"

    //validação se os campos estão vazios

    var saida = seuNome;
    saida += "\n" + NomePai;
    saida += "\n" + NomeMae;
    saida += "\n" + suaIdade;
    saida += "\n" + IdadePai;
    saida += "\n" + IdadeMae

    alert('' + saida)
}