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
  "     .  BPOR  .    ",
  "XXXXX.X XXXXX X.XXX",
  "    X.X       X.X  ",
  "XXXXX.X XXXXX X.XXX",
  "X........X........X",
  "X.XXX.XXX.X.XXX.XXX",
  "XO..X.....P.....O.X",
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

let walls = [];

function loadMap() {
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < columnCount; c++) {
      let tile = map[r][c];

      if (tile == "X") {
        walls.push(
          new Tile(c * tileSize, r * tileSize, tileSize, tileSize, wall),
        );
      }
    }
  }
}

function draw() {
  context.clearRect(0, 0, boardWidth, boardHeight);

  for (let wall of walls) {
    wall.draw();
  }
}


window.onload = function () {
  board = document.getElementById("board");

  board.width = boardWidth;
  board.height = boardHeight;

  context = board.getContext("2d");

  loadImage();

  wall.onload = function () {
    loadMap();

    requestAnimationFrame(update);
  };

};

function update() {
  draw();

  requestAnimationFrame(update);
}

function loadImage()
{
    wall = new Image();
    wall.src = '/sprites/wall.png';

    blueGhost = new Image();
    blueGhost.src = '/sprites/blueGhost.png';

    orangeGhost = new Image();
    orangeGhost.src = '/sprites/orangeGhost.png';

    pinkGhost = new Image();
    pinkGhost.src = "/sprites/pinkGhost.png";

    redGhost = new Image();
    redGhost.src = "/sprites/redGhost.png";

    pacManLeft = new Image();
    pacManLeft.src = "/sprites/leftFace.png";

    pacManRight = new Image();
    pacManRight.src = "/sprites/rightFace.png";

    pacManUp = new Image();
    pacManUp.src = "/sprites/upFace.png";

    pacManDown = new Image();
    pacManDown.src = "/sprites/downFace.png";

    scaredGhost = new Image();
    scaredGhost.src = "/sprites/scaredGhost.png";

    cherry = new Image();
    cherry.src = "/sprites/cherry.png";
}


