/*
repita
         escreva("Digite o primeiro valor: ")
         leia(valor01)
         escreva("Digite o segundo valor: ")
         leia(valor02)
         escreval("Resultado: ", valor01 + valor02)
         escreval("Deseja sair? S/N")
         leia(sairLoop)
    ate sairLoop <> "N"
*/
function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    while(contador < limite){
          nome = prompt("Digite o nome da pessoa: ")
          idade = prompt("Digite a idade para " + nome + ": ")
          if ( idade >= 18 ) 
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
          else
             document.getElementById("paragrafo").innerText = nome + " você é menor de idade!" 
           contador++ 
    }
}f


