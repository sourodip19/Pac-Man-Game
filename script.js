const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;

// sprites
let board;
let context;
let blueGhost;
let orangeGhost;
let pinkGhost;
let redGhost;
let cherry;
let scaredGhost;
let pacManLeft;
let pacManRight;
let pacManUp;
let pacManDown;
let wall;
let pacman;
let walls = [];
let ghosts = [];
const speed = 2;
// map of the game 

const map = [
  "XXXXXXXXXXXXXXXXXXX",
  "X........X........X",
  "X.XXX.XXX.X.XXX.XXX",
  "XOXXX.XXX.X.XXXOXXX",
  "X.................X",
  "X.XXX.X.XXXXX.X.XXX",
  "X.....X...X...X...X",
  "XXXXX.XXX X XXX.XXX",
  "    X.X       X.X  ",
  "XXXXX.X XX-XX X.XXX",
  "     .  BNYR  .    ",
  "XXXXX.X XXXXX X.XXX",
  "    X.X       X.X  ",
  "XXXXX.X XXXXX X.XXX",
  "X........X........X",
  "X.XXX.XXX.X.XXX.XXX",
  "XO..X.....M.....O.X",
  "XXX.X.X.XXXXX.X.XXX",
  "X.....X...X...X...X",
  "X.XXXXXXXXX.XXXXXX.",
  "XXXXXXXXXXXXXXXXXXX",
];

class Tile {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Sprite {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.image = image;

    this.velocityX = 0;
    this.velocityY = 0;
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}



function loadMap() {
  walls = [];
  ghosts = [];

  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < columnCount; c++) {
      const tile = map[r][c];

      const x = c * tileSize;
      const y = r * tileSize;

      switch (tile) {
        case "X":
          walls.push(new Tile(x, y, tileSize, tileSize, wall));

          break;

        case "M":
          pacman = new Sprite(x, y, tileSize, tileSize, pacManRight);

          break;

        case "B":
          ghosts.push(new Sprite(x, y, tileSize, tileSize, blueGhost));

          break;

        case "N":
          ghosts.push(new Sprite(x, y, tileSize, tileSize, pinkGhost));

          break;

        case "Y":
          ghosts.push(new Sprite(x, y, tileSize, tileSize, orangeGhost));

          break;

        case "R":
          ghosts.push(new Sprite(x, y, tileSize, tileSize, redGhost));

          break;
      }
    }
  }
}
function draw() {
  context.clearRect(0, 0, boardWidth, boardHeight);

  // Walls
  for (const wall of walls) {
    wall.draw();
  }

  // Ghosts
  for (const ghost of ghosts) {
    ghost.draw();
  }

  // Pac-Man
  if (pacman) {
    pacman.draw();
  }
}


window.onload = function () {
  board = document.getElementById("board");

  board.width = boardWidth;
  board.height = boardHeight;

  context = board.getContext("2d");

  document.addEventListener("keydown", movePacman);

  loadImage();

  wall.onload = function () {
    loadMap();

    requestAnimationFrame(update);
  };

};

function update() {
  if (pacman) {
    pacman.update();
  }

  for (const ghost of ghosts) {
    ghost.update();
  }

  draw();

  requestAnimationFrame(update);
}

function movePacman(e) {
  switch (e.code) {
    case "ArrowLeft":
      pacman.velocityX = -speed;
      pacman.velocityY = 0;
      pacman.image = pacManLeft;
      break;

    case "ArrowRight":
      pacman.velocityX = speed;
      pacman.velocityY = 0;
      pacman.image = pacManRight;
      break;

    case "ArrowUp":
      pacman.velocityX = 0;
      pacman.velocityY = -speed;
      pacman.image = pacManUp;
      break;

    case "ArrowDown":
      pacman.velocityX = 0;
      pacman.velocityY = speed;
      pacman.image = pacManDown;
      break;
  }
}

function loadImage()
{
    wall = new Image();
    wall.src = 'sprites/wall.png';

    blueGhost = new Image();
    blueGhost.src = 'sprites/blueGhost.png';

    orangeGhost = new Image();
    orangeGhost.src = 'sprites/orangeGhost.png';

    pinkGhost = new Image();
    pinkGhost.src = "sprites/pinkGhost.png";

    redGhost = new Image();
    redGhost.src = "sprites/redGhost.png";

    pacManLeft = new Image();
    pacManLeft.src = "sprites/leftFace.png";

    pacManRight = new Image();
    pacManRight.src = "sprites/rightFace.png";

    pacManUp = new Image();
    pacManUp.src = "sprites/upFace.png";

    pacManDown = new Image();
    pacManDown.src = "sprites/downFace.png";

    scaredGhost = new Image();
    scaredGhost.src = "sprites/scaredGhost.png";

    cherry = new Image();
    cherry.src = "sprites/cherry.png";
}


