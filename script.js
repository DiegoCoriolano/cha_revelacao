const diasCont = document.getElementById("dias");
const horasCont = document.getElementById("horas");
const minutosCont = document.getElementById("minutos");
const segundosCont = document.getElementById("segundos");

const chaRevelacao = "2023-10-08 19:00:00";

function contador() {
  const dataCha = new Date(chaRevelacao);
  const dataAtual = new Date();

  const segundosTotais = Math.floor((dataCha - dataAtual) / 1000);
  const dias = Math.floor(segundosTotais / 3600 / 24);
  const horas = Math.floor((segundosTotais / 3600) % 24);
  const minutos = Math.floor((segundosTotais / 60) % 60);
  const segundos = Math.floor(segundosTotais % 60);

  console.log(diasCont.innerHTML);

  diasCont.innerHTML = dias;
  horasCont.innerHTML = horas;
  minutosCont.innerHTML = minutos;
  segundosCont.innerHTML = segundos;
}

contador();

setInterval(contador, 1000);

let menino = 0;
let menina = 0;

const contMenino = document.getElementById("somamenino");
const contMenina = document.getElementById("somamenina");

function contagemMenino() {
  menino++;

  contMenino.innerHTML = menino;
}

function contagemMenina() {
  menina++;

  contMenina.innerHTML = menina;
}
