
const legendas = [
  "Nada de desespero, rsrsrs! SOU EU, SEU AMOR, ESSE QUE SE ENCONTRA A SUA FRENTE! Espero que saiba do que se trata isso, já tá mais que óbvio!",
  "Acorda, DÃÃÃÃ! Se trata do meu amor por você né, gata... vou tentar sintetizar em algumas imagens e poucas palavras tudo que venho sentido, espero que goste da surpresa! SPOILER: vai ser uma das coisas mais melosas que você já viu!",
  "Mozão, gostaria de deixar claro já inicialmente que é dificílimo verbalizar um sentimento tão incrível e elogiar uma pessoa tão especial como você, sobram sensações e faltam definições precisas, você é demais.",
  "O início deve ser dado por uma das coisas que eu mais acho fora de série numa relação como a nossa, que é a facilidade que você tem de me fazer sentir bem em qualquer ambiente, da toca da gambá à lapa.",
  "Rapidamente falando, é indescritível a sensação de estar perto de você, tudo que há de bom em mim se manifesta e meu olhar vem sempre denunciando o quanto você se tornou importante, tá na cara.",
  "A Louise que eu conheci nesses últimos meses é extraordinária, é de um brilho que tem 1 zilhão de lúmens a mais que o do Sol, de uma empatia e sensibilidade que parece aquele tipo de pessoa que tu imagina ligando pros avós todo dia só pra saber como eles estão, é tão afável que você vê ela alimentando e resgatando os cachorros de rua, sabe? esse tipo de pessoa? é ELA!",
  "Com essa companhia a vida vale ser vivida. Você ao meu lado nos episódios importantes tudo fica mais natural, em ordem, da maneira que tem que ser...",
  "Os momentos felizes são ainda mais alegres contigo, ainda que nos momentos tristes, você é acalanto, organicamente você conquista cada parte de mim e é isso que eu quero pra sempre",
  "Mais do que os sambas de sexta a noite e os grudes no domingo, quero sua companhia nas lojas de artigos esportivos pra sempre vendo esse tipo de cena nos sábados pré cinema",
  "Independentemente do humor e da fase que estivermos vivendo, está sempre à disposição pra me dar o privilégio de te admirar numa noite do fim do verão (até tê-la, eu nem sabia que era disso que eu precisava)",
  "Gosto de projetar o futuro em devaneio e, só de imaginar ter sua presença em todas as noites de oscar, seja num bar qualquer, no conforto de casa ou viajando; me sinto aconchegado",
  "O mais interessante é que pra mim caiu a ficha de que, além de ser companhia para todos os momentos, eu FINALMENTE encontrei a pessoa que me conforta num festival de samba debaixo de chuva no rio de janeiro, aquela parada que parecia ser só pela música e pelo lazer, começa a fazer sentido",
  "! ALERTA ! Eu sou do tipo de pessoa que duvida de tudo, mas contigo as coisas são reais. Achei que fosse inconcebível uma realidade na qual eu fosse tão pleno. Pra mim essa plenitude tá em coisas do tipo matar os insetos pra você, dormir agarrado de domingo pra segunda acordar cedinho, ficar na sua portaria o máximo de tempo enrolando pra não ir embora. Você ressignificou as músicas de amor pra mim e me mostrou que ao invés de duvidar de tudo, eu tenho que acreditar no amor e no tempo. (não é possível que a gente não tenha ficado juntos em julho de 2022 sem motivo, e, por hironia do destino voltamos a nos ver mais de 2 anos depois). Enfim, dito isso tudo com esse vídeo repetindo, acho que já da pra dizer que EU TE AMO, (você ja disse umas 10 vezes pelo menos, ja ta ficando unilateral, emocionada!) arrasta mais uma pro lado aí."
];

let index = 0;

function mostrarCarrossel() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("carrosselContainer").style.display = "block";
  document.getElementById("musica").play();
  atualizarCarrossel();
}

function atualizarCarrossel() {
  const container = document.getElementById("carrossel");
  container.innerHTML = "";

  const item = document.createElement("div");
  item.className = "carrossel-item active";

  const img = document.createElement("img");
  const num = (index + 1).toString().padStart(2, "0");
  img.src = `img/${num}.jpg`;

  const legenda = document.createElement("p");
  legenda.className = "legenda";
  legenda.innerText = legendas[index];
  legenda.style.whiteSpace = "pre-wrap";
  legenda.style.overflow = "visible";
  legenda.style.textOverflow = "unset";
  legenda.style.maxWidth = "90%";

  item.appendChild(img);
  item.appendChild(legenda);
  container.appendChild(item);

  if (index === 12) {
    document.getElementById("carrosselContainer").style.display = "none";
    document.getElementById("perguntaFinal").style.display = "block";
  }
}

function responder(aceitou) {
  if (aceitou) {
    alert("💖 Eu sabia! Agora somos oficialmente namorados!");
  } else {
    document.getElementById("perguntaFinal").style.display = "none";
    document.getElementById("erroResposta").style.display = "block";
  }
}

function voltar() {
  document.getElementById("erroResposta").style.display = "none";
  document.getElementById("perguntaFinal").style.display = "block";
}

document.getElementById("startButton").onclick = mostrarCarrossel;
document.getElementById("next").onclick = () => {
  if (index < legendas.length - 1) {
    index++;
    atualizarCarrossel();
  }
};
document.getElementById("prev").onclick = () => {
  if (index > 0) {
    index--;
    atualizarCarrossel();
  }
};
