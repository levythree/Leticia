const tela = document.getElementById("tela");

const calcular = () => tela.value = eval(tela.value);
const limparTela = () => tela.value = "";
const clicarBotao = botao => tela.value += botao;
