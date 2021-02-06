function EX1(f1, f2) {
    var frase1= "Um mago não se atrasa, Frodo Bolseiro. Nem se adianta. Ele chega exatamente quando pretende chegar.";
    var frase2= "Não tenha pena dos mortos, Harry. Tenha pena dos vivos, e acima de tudo, daqueles que vivem sem amor.";
    var texto1 = document.getElementById("f1");
    var texto2 = document.getElementById("f2");
    var maior;
    if(texto1.length > texto2.length){
        maior = texto1
    }else{
        maior = texto2
    }
    alert(''+ maior)
}

function EX2() {
    var frase1= "Um mago não se atrasa, Frodo Bolseiro. Nem se adianta. Ele chega exatamente quando pretende chegar.";
    var frase2= "I'm going to make him an offer he can't refuse.";
    var maior;
    maior = funcao2(frase1, frase2, maior)
    alert(''+ maior)
}

function funcao2(frase1, frase2, maior){
    if(frase1.length > frase2.length){
        maior = frase1
    }else{
        maior = frase2
    }
    return maior;
}

function EX3(){
    var seuNome="Gustavo"
    var NomePai="Jose"
    var NomeMae="Maria"
    var suaIdade="20"
    var IdadePai="56"
    var IdadeMae="50"

    //validação se os campos estão vazios

    var saida = seuNome;
    saida += "\n" + NomePai;
    saida += "\n" + NomeMae;
    saida += "\n" + suaIdade;
    saida += "\n" + IdadePai;
    saida += "\n" + IdadeMae

    alert('' + saida)
}