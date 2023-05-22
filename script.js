document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); // Seleciona o arquivo de áudio campativel à tecla que eu digitei.

  if (audioElement) {
    audioElement.currentTime = 0; // Não espera o áudio acabar para toca-lo novamente.
    audioElement.play(); // Se achou o elemento, irá tocar o audio.
  }

  let keyElement = document.querySelector(`div[data-key="${sound}"]`); // Seleciona a div key.

  if (keyElement) {
    keyElement.classList.add("active"); // Adiciona a class active.

    setTimeout(() => {
      keyElement.classList.remove("active"); // Remove a class active após 300ms.
    }, 300);
  }
}

// Composição

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value; // Seleciona o valor do input

  if (song !== "") {
    // Coloca a composição no espaço "Make a song".
    let songArray = song.split("");

    playComposition(songArray);
  }
});

function playComposition(songArray) {
  //Toca a música da composição.
  let wait = 0;

  for (let songItem of songArray) {
    // Coloca um intervalo de tempo entre os itens.
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 180;
  }
}
