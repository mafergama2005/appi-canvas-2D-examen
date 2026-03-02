/********************************************************
 * Proyecto: Ballena Caricatura con Canvas 2D
 * Materia: Graficación por Computadora
 * Alumna: Maria Fernanda Gama Barrón
 * Fecha: Marzo 2026
 *
 * Descripción:
 *   Dibujo estilo caricatura de una ballena en el mar,
 *   incluyendo sol con rayos, nubes, burbujas y detalles,
 *   usando más de 50 figuras básicas.
 ********************************************************/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/******************* FONDO *******************/
function fondo() {
  ctx.fillStyle = "#8fd3ff";
  ctx.fillRect(0, 0, 500, 250);

  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(0, 250, 500, 150);

  // Olas
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(50 + i * 50, 250, 25, 0, Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

/******************* SOL *******************/
function sol() {
  // Circulo del sol
  ctx.beginPath();
  ctx.arc(430, 70, 30, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Rayos del sol
  for (let i = 0; i < 12; i++) {
    const ang = (i * Math.PI * 2) / 12;
    const x1 = 430 + Math.cos(ang) * 35;
    const y1 = 70 + Math.sin(ang) * 35;
    const x2 = 430 + Math.cos(ang) * 50;
    const y2 = 70 + Math.sin(ang) * 50;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

/******************* NUBES *******************/
function nube(x, y) {
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
  ctx.arc(x + 55, y, 20, 0, Math.PI * 2);
  ctx.fill();
}

/******************* CUERPO *******************/
function cuerpo() {
  ctx.beginPath();
  ctx.ellipse(260, 260, 170, 85, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#2d6cdf";
  ctx.fill();
}

/******************* PANZA *******************/
function panza() {
  ctx.beginPath();
  ctx.ellipse(285, 290, 120, 50, 0, 0, Math.PI);
  ctx.fillStyle = "#e6f7ff";
  ctx.fill();
}

/******************* COLA *******************/
function cola() {
  ctx.beginPath();
  ctx.moveTo(90, 260);
  ctx.quadraticCurveTo(40, 210, 40, 245);
  ctx.quadraticCurveTo(40, 280, 90, 260);
  ctx.fillStyle = "#2d6cdf";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(90, 260);
  ctx.quadraticCurveTo(40, 300, 40, 275);
  ctx.quadraticCurveTo(40, 250, 90, 260);
  ctx.fill();
}

/******************* ALETA *******************/
function aleta() {
  ctx.beginPath();
  ctx.moveTo(280, 300);
  ctx.quadraticCurveTo(320, 340, 350, 300);
  ctx.closePath();
  ctx.fillStyle = "#1b4f9c";
  ctx.fill();
}

/******************* OJO *******************/
function ojo() {
  ctx.beginPath();
  ctx.arc(350, 250, 9, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(353, 252, 4, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(355, 248, 2, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
}

/******************* MEJILLA *******************/
function mejilla() {
  ctx.beginPath();
  ctx.arc(365, 265, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#ffb6c1";
  ctx.fill();
}

/******************* BOCA *******************/
function boca() {
  ctx.beginPath();
  ctx.arc(370, 280, 25, 0, Math.PI);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
}

/******************* SOPLO *******************/
function soplo() {
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.ellipse(260 + i * 15, 185, 12, 25, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#b3e5ff";
    ctx.fill();
  }
}

/******************* BURBUJAS *******************/
function burbujas() {
  const burbujas = [
    [100, 200, 6], [130, 170, 5], [160, 190, 4],
    [390, 200, 6], [420, 180, 5], [450, 210, 4]
  ];

  burbujas.forEach(b => {
    ctx.beginPath();
    ctx.arc(b[0], b[1], b[2], 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  });
}

/******************* TEXTURA *******************/
function textura() {
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(190 + i * 25, 280, 12, 0, Math.PI);
    ctx.strokeStyle = "#a3c9ff";
    ctx.stroke();
  }
}

/******************* DIBUJO FINAL *******************/
function dibujar() {
  fondo();           // ~15
  sol();             // 13
  nube(70, 80);      // 3
  nube(200, 60);     // 3
  nube(300, 90);     // 3
  cuerpo();          // 1
  panza();           // 1
  cola();            // 4
  aleta();           // 1
  ojo();             // 3
  mejilla();         // 1
  boca();            // 1
  soplo();           // 3
  burbujas();        // 6
  textura();         // 8
}

dibujar();