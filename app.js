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
    var seuNome = "";
    var NomePai = "";
    var NomeMae = "";
    var suaIdade = "";
    var IdadePai = "";
    var IdadeMae = "";

    seuNome = document.querySelector("#SeuNome");
    NomePai = document.querySelector("#NomePai");
    NomeMae = document.querySelector("#NomeMae");
    suaIdade = document.querySelector("#suaIdade");
    IdadePai = document.querySelector("#IdadePai");
    IdadeMae = document.querySelector("#IdadeMae");

    //validação se os campos estão vazios

    var saida = seuNome.value;
    saida += " -- Idade: " + suaIdade.value + "\n";
    saida += "" + NomePai.value;
    saida += " -- Idade: " + IdadePai.value + "\n";
    saida += "" + NomeMae.value;
    saida += " -- Idade: " + IdadeMae.value;
    alert('' + saida);
}

function EX4() {
    var Frase = "Olá 1, tudo bem 4 com você 6";
    var resultado = Frase.replace(/[0-9]/g, "[removido]")

    alert(resultado)
}

function EX5() {
    var Frase = "N05 50M05 4 51NGU";

    Frase = Frase.replace(/[0]/g, "o")
    Frase = Frase.replace(/[4]/g, "a")
    Frase = Frase.replace(/[1]/g, "i")
    Frase = Frase.replace(/[5]/g, "s")

    Frase = Frase.toUpperCase();
    alert(Frase)
}