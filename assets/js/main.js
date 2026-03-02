/********************************************************
 * Proyecto: Ballena con Canvas 2D
 * Materia: Graficación por Computadora
 * Alumna: Maria Fernanda Gama Barrón
 * Fecha: Marzo 2026
 * Descripción:
 *   Dibujo de una ballena usando más de 30 figuras básicas
 *   con la API Canvas 2D.
 ********************************************************/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/************* FONDO MAR *************/
function fondo() {
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(0, 0, 500, 400);
}

/************* BURBUJAS *************/
function burbujas() {
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(40 + i * 45, 60, 6, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

/************* CUERPO BALLENA *************/
function cuerpo() {
  ctx.beginPath();
  ctx.ellipse(250, 230, 170, 80, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#2c3e50";
  ctx.fill();
}

/************* COLA *************/
function cola() {
  ctx.beginPath();
  ctx.moveTo(80, 230);
  ctx.quadraticCurveTo(30, 180, 40, 240);
  ctx.quadraticCurveTo(30, 300, 80, 260);
  ctx.closePath();
  ctx.fillStyle = "#2c3e50";
  ctx.fill();
}

/************* ALETA *************/
function aleta() {
  ctx.beginPath();
  ctx.moveTo(260, 240);
  ctx.quadraticCurveTo(290, 280, 320, 260);
  ctx.closePath();
  ctx.fillStyle = "#34495e";
  ctx.fill();
}

/************* OJO *************/
function ojo() {
  ctx.beginPath();
  ctx.arc(330, 210, 6, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(332, 212, 3, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
}

/************* BOCA *************/
function boca() {
  ctx.beginPath();
  ctx.arc(350, 235, 25, 0, Math.PI);
  ctx.strokeStyle = "white";
  ctx.stroke();
}

/************* DETALLES *************/
function detalles() {
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(150 + i * 30, 260);
    ctx.lineTo(160 + i * 30, 290);
    ctx.strokeStyle = "#5dade2";
    ctx.stroke();
  }
}

/************* DIBUJAR *************/
function dibujar() {
  fondo();
  burbujas();
  cuerpo();
  cola();
  aleta();
  ojo();
  boca();
  detalles();
}



dibujar();