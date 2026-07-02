const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;

// sprites
let blueGhosht;
let orangeGhost;
let pinkGhost;
let redGhost;
let pacManLeft;
let pacManRight;
let pacManUp;
let pacManDown;
let wall;

window.onload = function () {
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardHeight;
  context = board.getContext("2d");
};

function loadImage()
{
    wall = new Image();
    wall.src = '/sprites/wall.png';

    blueGhosht = new Image();
    blueGhosht.src = '/sprites/blueGhost.png';

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
