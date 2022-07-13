/*
 *  Data: 02 / 07 / 2022;
 *  Projeto: Tetris Clone Web;
 *  Developer: Silvanei Martins;
 *  Email: silvaneimartins_rcc@hotmail.com;
 *  Informacao: Arquivo principal do projeto Tetris;
 */

class Tetris { 
	constructor(imageX, imageY, template) {
		this.imageY = imageY;
		this.imageX = imageX;
		this.template = template;
	
	}

	checkBottom() {}

	checkLeft() {}

	moveRight() {}

	moveLeft() {}

	moveBottom() {}

	changeRotation() {}
}

const imageSquareSize = 24;
const size = 40;
const framePerSecond = 24;
const gameSpeed = 5;
const canvas = document.getElementById("canvas");
const image = document.getElementById("image");
const ctx = canvas.getContext('2d');
const squareCountX = canvas.width / size;
const squareCountY = canvas.height / size;

const shapes = [
	  new Tetris(0, 120, [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ]),
  new Tetris(0, 96, [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]),
  new Tetris(0, 72, [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ]),
  new Tetris(0, 48, [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ]),
  new Tetris(0, 24, [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ]),
  new Tetris(0, 0, [
    [1, 1],
    [1, 1],
  ]),
  new Tetris(0, 48, [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ]),
]


let gameMap;
let gameOver;
let currentShape;
let nextShape;
let score;
let initialTwoDArr;
let whiteLineTickness = 4;


let gameLoop = () => {
  setInterval(update, 1000 / gameSpeed);
  setInverval(draw, 1000 / framePerSecond);
}


let update = () => {

}

let drawRect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

let drawBackground = () => {
  drawRect(0, 0, canvas.width, canvas.height, "#BCA0DC")
  
  for (let i = 0; i < squareCountX + 1; i ++) {
    drawRect(
      0,
      size * i - whiteLineThickness, 
      canvas.height, 
      "white"
    );
  }

  for (let i = 0; i < squareCountY + 1, i ++) {
    drawRect(
      0,
      size * i - whiteLineThickness,
      canvas.width,
      "white",
    );
  }
}

let drawCurrentTetris = () => {
  for (let i = 0; i < currentShape.template.length; i ++) {
    for (let j = 0; j < currentShape.template.length; j ++) {
      if (currentShape.template[i][j] == 0) continue;
      ctx.drawImage(
        image,
        currentShape.imageX,
        currentShape.imageY,
        imageSquareSize,
        imageSquareSize,
        Math.trunc(currentShape.x) * size + size * i,
        Math.trunc(currentShape.y) * size + size * j,
        size,
        size
      );
    }
  }
}

let drawSquares = () => {}

let drawNextShape = () => {}


let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawSquares();
  drawCurrentTetris();
  drawNextShape();
  if (gameOver) {
    drawGameOver();
  }
}

let getRandomShape = () => {
  return Object.create(shapes[Math.floor(Math.random() * shapes.length)]);
}

let resetVars = () => {
  initialTwoDArr = [];

  for (let i = 0; i < squareCountY; i ++) {
    let temp = [];

    for (let j = 0; j < squareCountX; j ++) {
      temp.push({ imageX: -1, imageY: -1});
    }

    initialTwoDArr.push(temp)
  }

  score = 0;
  gameOver = false;
  currentShape = getRandomShape();
  nextShape = getRandomShape();
  gameMap = initialTwoDArr;
}

resetVars();
gameLoop();


































