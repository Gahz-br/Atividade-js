// ============================================
// EXERCICIOS DE JAVASCRIPT COM DOM
// Resolva cada exercicio seguindo as instrucoes
// ============================================


// ---------- Exercicio 1 ----------
// Ao clicar no botao, mude o texto do elemento #texto1
// para "Texto alterado com sucesso!"
//
// Dica: use document.getElementById() e .textContent

document.getElementById("btn1").addEventListener("click", function () {
document.getElementById("texto1").textContent = "Texto alterado com sucesso!"
})

// ---------- Exercicio 2 ----------
// Ao clicar no botao, mude a cor do texto #texto2 para azul
//
// Dica: use .style.color = "blue"
const botao2 = document.getElementById("btn2");
const texto2 = document.getElementById("texto2");

botao2.addEventListener("click", function () {
    texto2.style.color = "purple"; });
// ---------- Exercicio 3 ----------
// Ao clicar no botao, esconda o elemento #texto3
//
// Dica: use .style.display = "none"
const botao3 = document.getElementById("btn3");
const texto3 = document.getElementById("texto3")
botao3.addEventListener("click", function () {
    texto3.style.display = "none"; });

// ---------- Exercicio 4 ----------
// Ao clicar no botao, adicione um novo <li> com o texto
// "Novo item" dentro da lista #lista4
//
// Dica: use document.createElement() e .appendChild()
const botao4 = document.getElementById("btn4")
const lista4 = document.getElementById("lista4")
botao4.addEventListener("click", function () {
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo item";
    lista4.appendChild(novoItem);
});


// ---------- Exercicio 5 ----------
// Ao clicar no botao, mude a cor de fundo da #caixa5
// para amarelo
//
// Dica: use .style.backgroundColor = "yellow"
const botao5 = document.getElementById("btn5");
const caixa5 = document.getElementById("caixa5");
botao5.addEventListener("click", function () {
caixa5.style.backgroundColor = "yellow"; });


// ---------- Exercicio 6 ----------
// Ao clicar no botao, aumente o numero do #contador6 em 1
//
// Dica: leia o valor atual com .textContent, converta para
// numero com Number() e some 1
const botao6 = document.getElementById("btn6");
const contador6 = document.getElementById("contador6");
botao6.addEventListener("click", function () {
contador6.textContent = Number(contador6.textContent) + 1; });


// ---------- Exercicio 7 ----------
// Ao clicar no botao, pegue o valor digitado no #input7
// e mostre dentro do #resultado7
//
// Dica: use .value para pegar o texto do input
document.getElementById("btn7").addEventListener("click", function () {
    let texto = document.getElementById("input7").value;
    document.getElementById("resultado7").textContent = texto; })


// ---------- Exercicio 8 ----------
// Ao clicar no botao, adicione a classe "destaque" ao #texto8
//
// Dica: use .classList.add("destaque")



// ---------- Exercicio 9 ----------
// Ao clicar no botao, remova o ultimo <li> da #lista9
//
// Dica: use .lastElementChild e .removeChild()



// ---------- Exercicio 10 ----------
// Ao clicar no botao, troque o src da #imagem10 para
// "https://placecats.com/300/200"
//
// Dica: use .src = "nova-url"

