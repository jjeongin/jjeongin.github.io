// Creator: Jeongin Lee
// Created date: Oct 14, 2021
// Description: PAC-MAN Clone Game

// SETTINGS
// WINDOW : 492 x 300 pixels
// 30 pixel gap on top & bottom to display game info
let BOARD_W = 492;   // board size
let BOARD_H = 240;
let GRID_SIZE = 12;   // basic element for the map (2 GRID = 1 PAC-MAN Size)
let ROW = BOARD_H/GRID_SIZE; // 41 rows inside the map
let COL = BOARD_W/GRID_SIZE; // 20 columns inside the map

let LIFE = 2;
let SPEED = 2;

class PacMan { // class for pacman
  constructor(starting_row, starting_col) {
    this.size = GRID_SIZE*2; // size of the pacman
    this.direction = null; // up, down, left, right
    this.row = starting_row; // initial position
    this.col = starting_col;
    this.available_direction = []; // array of possible directions at current position
    this.image = sprites[0][9]; // initial image
    this.image_step = 0; // to make animation as pacman moves
  }

  display() {
    push();
    translate(0, 30); // top gap for the game info
    image(this.image, this.col * GRID_SIZE - GRID_SIZE/2, this.row * GRID_SIZE - GRID_SIZE/2, this.size, this.size); // display pacman at the right row, col
    pop();
  }

  move() {
    // move pacman to the other side of pacman reaches a warp tunnel
    if (this.col == 0) { // left end to right end
      this.col = COL-1;
    } else if (this.col == COL-1) { // right end to left end
      this.col = 0;
    }

    if (this.direction == "up" && this.available_direction.includes("up")) { // if the user pressed UP key & there is available space at upper side
      this.image = sprites[3+this.image_step][9];
      this.row -= 1;
    } else if (this.direction == "down" && this.available_direction.includes("down")) {
      this.image = sprites[3+this.image_step][10];
      this.row += 1;
    } else if (this.direction == "left" && this.available_direction.includes("left")) {
      this.image = sprites[0+this.image_step][9];
      this.col -= 1;
    } else if (this.direction == "right" && this.available_direction.includes("right")) {
      this.image = sprites[0+this.image_step][10];
      this.col += 1;
    }
    
    this.image_step = (this.image_step+1) % 3; // pacman mouth animation
  }
}

class Ghost {
  constructor(_name, starting_row, starting_col) {
    this.size = GRID_SIZE*2; // ghosts size
    this.name = _name;
    this.row = starting_row;
    this.col = starting_col;
    this.available_direction = [];
    this.direction = null;
    this.image_step = 0; // ghost animation
    if(this.name == "Blinky") { // red ghost
      this.image = sprites[0][15];
      this.image_col = 15;
    }
    else if(this.name == "Pinky") { // pink ghost
      this.image = sprites[0][13];
      this.image_col = 13;
    }
    else if(this.name == "Inky") { // blue ghost
      this.image = sprites[0][14];
      this.image_col = 14;
    }
    else if(this.name == "Clyde") { // orange ghost
      this.image = sprites[0][12];
      this.image_col = 12;
    }
  }

  display() {
    push();
    translate(0, 30); // black space on the top for the game info
    image(this.image, this.col * GRID_SIZE - GRID_SIZE/2, this.row * GRID_SIZE - GRID_SIZE/2, this.size, this.size);
    pop();
  }

  move() {
    // move ghost to the other side of ghost reaches a warp tunnel
    if (this.col == 0) { // left end to right end
      this.col = COL-1;
    } else if (this.col == COL-1) { // right end to left end
      this.col = 0;
    }

    if (this.direction == "up" && this.available_direction.includes("up")) {
      this.image = sprites[6][this.image_col]; // use different image at each direction the ghost is heading towards
      this.row -= 1;
    } else if (this.direction == "down" && this.available_direction.includes("down")) {
      this.image = sprites[2][this.image_col];
      this.row += 1;
    } else if (this.direction == "left" && this.available_direction.includes("left")) {
      this.image = sprites[4][this.image_col];
      this.col -= 1;
    } else if (this.direction == "right" && this.available_direction.includes("right")) {
      this.image = sprites[0][this.image_col];
      this.col += 1;
    }
    
    this.image_step = (this.image_step+1) % 2; // ghost animation
  }

  change_direction() {
    if (this.available_direction.length == 0) // error handling
      this.direction = null;
    else {
      let random_direction = Math.floor(Math.random() * this.available_direction.length); // randomly pick next direction at each loop
      this.direction = this.available_direction[random_direction];
    }
  }
}

class PacDot {
  constructor(_row, _col) {
    this.row = _row; // position of dots
    this.col = _col;
  }
  display() {
    push();
    translate(0, 30);
    noStroke();
    fill(255, 183, 174); // color of pacdots
    square(this.col * GRID_SIZE + GRID_SIZE/2, this.row * GRID_SIZE + GRID_SIZE/2, 2); // display dots
    pop();
  }
}

// class to represent each area of the maze
class Area {
  constructor(_row, _col) {
    this.row = _row;
    this.col = _col;
  }
}

class Maze {
  constructor() {
    this.bg = loadImage("images/bg_f.png"); // load background image

    this.PacMan_initial_pos = new Area(18, 25); // assign initial position for each character
    this.Blinky_initial_pos = new Area(5, 23);
    this.Pinky_initial_pos = new Area(7, 23);
    this.Inky_initial_pos = new Area(8, 22);
    this.Clyde_initial_pos = new Area(8, 24);

    // push ghost house info
    this.ghost_house = [];
    this.ghost_house.push( new Area(7, 22) );
    this.ghost_house.push( new Area(7, 23) );
    this.ghost_house.push( new Area(7, 24) );
    this.ghost_house.push( new Area(8, 22) );
    this.ghost_house.push( new Area(8, 23) );
    this.ghost_house.push( new Area(8, 24) );
    this.ghost_house_exit = new Area(6, 23);

    // push valid area info
    this.valid_area = [];
    for (let i = 1; i < 40; i++) { // 1st row
      this.valid_area.push( new Area(1, i) );
    }
    this.valid_area.push( new Area(2, 1) );
    this.valid_area.push( new Area(2, 7) );
    this.valid_area.push( new Area(2, 19) );
    this.valid_area.push( new Area(2, 31) );
    this.valid_area.push( new Area(2, 36) );
    this.valid_area.push( new Area(2, 39) );
    this.valid_area.push( new Area(3, 1) );
    this.valid_area.push( new Area(3, 7) );
    this.valid_area.push( new Area(3, 19) );
    this.valid_area.push( new Area(3, 31) );
    this.valid_area.push( new Area(3, 36) );
    this.valid_area.push( new Area(3, 39) );
    this.valid_area.push( new Area(4, 1) );
    this.valid_area.push( new Area(4, 7) );
    this.valid_area.push( new Area(4, 19) );
    this.valid_area.push( new Area(4, 31) );
    this.valid_area.push( new Area(4, 36) );
    this.valid_area.push( new Area(4, 39) );
    this.valid_area.push( new Area(5, 1) );
    this.valid_area.push( new Area(5, 7) );
    for (let i = 19; i < 37; i++)
      this.valid_area.push( new Area(5, i) );
    this.valid_area.push( new Area(5, 39) );
    this.valid_area.push( new Area(6, 1) );
    this.valid_area.push( new Area(6, 2) );
    this.valid_area.push( new Area(6, 3) );
    this.valid_area.push( new Area(6, 7) );
    this.valid_area.push( new Area(6, 11) );
    this.valid_area.push( new Area(6, 15) );
    this.valid_area.push( new Area(6, 19) );
    this.valid_area.push( new Area(6, 27) );
    this.valid_area.push( new Area(6, 31) );
    this.valid_area.push( new Area(6, 36) );
    this.valid_area.push( new Area(6, 37) );
    this.valid_area.push( new Area(6, 38) );
    this.valid_area.push( new Area(6, 39) );
    this.valid_area.push( new Area(7, 3) );
    this.valid_area.push( new Area(7, 7) );
    this.valid_area.push( new Area(7, 11) );
    this.valid_area.push( new Area(7, 15) );
    this.valid_area.push( new Area(7, 19) );
    this.valid_area.push( new Area(7, 27) );
    this.valid_area.push( new Area(7, 31) );
    this.valid_area.push( new Area(7, 36) );
    this.valid_area.push( new Area(8, 3) );
    this.valid_area.push( new Area(8, 7) );
    this.valid_area.push( new Area(8, 11) );
    this.valid_area.push( new Area(8, 15) );
    this.valid_area.push( new Area(8, 19) );
    this.valid_area.push( new Area(8, 27) );
    this.valid_area.push( new Area(8, 31) );
    this.valid_area.push( new Area(8, 36) );
    this.valid_area.push( new Area(9, 3) );
    this.valid_area.push( new Area(9, 7) );
    this.valid_area.push( new Area(9, 11) );
    this.valid_area.push( new Area(9, 15) );
    this.valid_area.push( new Area(9, 19) );
    this.valid_area.push( new Area(9, 27) );
    this.valid_area.push( new Area(9, 31) );
    this.valid_area.push( new Area(9, 36) );
    this.valid_area.push( new Area(10, 0) );
    this.valid_area.push( new Area(10, 1) );
    this.valid_area.push( new Area(10, 2) );
    this.valid_area.push( new Area(10, 3) );
    this.valid_area.push( new Area(10, 7) );
    this.valid_area.push( new Area(10, 11) );
    this.valid_area.push( new Area(10, 15) );
    for (let i = 19; i < 32; i++)
      this.valid_area.push( new Area(10, i) );
    for (let i = 34; i < 41; i++)
      this.valid_area.push( new Area(10, i) );
    this.valid_area.push( new Area(11, 3) );
    this.valid_area.push( new Area(11, 7) );
    this.valid_area.push( new Area(11, 11) );
    this.valid_area.push( new Area(11, 15) );
    this.valid_area.push( new Area(11, 19) );
    this.valid_area.push( new Area(11, 31) );
    this.valid_area.push( new Area(11, 36) );
    this.valid_area.push( new Area(12, 3) );
    this.valid_area.push( new Area(12, 7) );
    this.valid_area.push( new Area(12, 11) );
    this.valid_area.push( new Area(12, 15) );
    this.valid_area.push( new Area(12, 19) );
    this.valid_area.push( new Area(12, 31) );
    this.valid_area.push( new Area(12, 36) );
    this.valid_area.push( new Area(13, 3) );
    this.valid_area.push( new Area(13, 7) );
    this.valid_area.push( new Area(13, 11) );
    this.valid_area.push( new Area(13, 15) );
    this.valid_area.push( new Area(13, 19) );
    this.valid_area.push( new Area(13, 31) );
    this.valid_area.push( new Area(13, 36) );
    for (let i = 1; i < 24; i++)
      this.valid_area.push( new Area(14, i) );
    for (let i = 27; i < 40; i++)
      this.valid_area.push( new Area(14, i) );
    this.valid_area.push( new Area(15, 1) );
    this.valid_area.push( new Area(15, 7) );
    this.valid_area.push( new Area(15, 19) );
    this.valid_area.push( new Area(15, 23) );
    this.valid_area.push( new Area(15, 27) );
    this.valid_area.push( new Area(15, 31) );
    this.valid_area.push( new Area(15, 39) );
    this.valid_area.push( new Area(16, 1) );
    this.valid_area.push( new Area(16, 7) );
    this.valid_area.push( new Area(16, 19) );
    this.valid_area.push( new Area(16, 23) );
    this.valid_area.push( new Area(16, 27) );
    this.valid_area.push( new Area(16, 31) );
    this.valid_area.push( new Area(16, 39) );
    this.valid_area.push( new Area(17, 1) );
    this.valid_area.push( new Area(17, 7) );
    this.valid_area.push( new Area(17, 19) );
    this.valid_area.push( new Area(17, 23) );
    this.valid_area.push( new Area(17, 27) );
    this.valid_area.push( new Area(17, 31) );
    this.valid_area.push( new Area(17, 39) );
    for (let i = 1; i < 20; i++)
      this.valid_area.push( new Area(18, i) );
    for (let i = 23; i < 28; i++)
      this.valid_area.push( new Area(18, i) );
    for (let i = 31; i < 40; i++)
      this.valid_area.push( new Area(18, i) );

    // push pacdots
    this.pacdots = [];
    for (let i = 0; i < this.valid_area.length; i++) {  // push pac-dot in the middle of each valid area
      let ith_valid_area = this.valid_area[i];
      if (ith_valid_area.row == 10 && ith_valid_area.col <= 2) // no pacdot on the warp tunnel (left)
        continue;
      else if (ith_valid_area.row == 10 && ith_valid_area.col >= 37) // no pacdot on the the warp tunnel (right)
        continue;
      else if (ith_valid_area.row == 5 && ith_valid_area.col >= 19 && ith_valid_area.col <= 30) // no pacdot around the ghost house (top)
        continue;
      else if (ith_valid_area.row == 10 && ith_valid_area.col >= 19 && ith_valid_area.col <= 30) // no pacdot around the ghost house (bottom)
        continue;
      else if (ith_valid_area.col == 19 && ith_valid_area.row >= 2 && ith_valid_area.row <= 13) // no pacdot around the ghost house (left)
        continue;
      else if (ith_valid_area.col == 27 && ith_valid_area.row >= 6 && ith_valid_area.row <= 9) // no pacdot around the ghost house (right)
        continue;
      this.pacdots.push(new PacDot(ith_valid_area.row, ith_valid_area.col)); // push pacdot to the valid area
    }
  }

  display() {
    image(this.bg, 0, 0, width, height); // display background
    for (let i = 0; i < this.pacdots.length; i++) { // display pacdots
      this.pacdots[i].display();
    }
  }
}

class Game {
  constructor() {
    this.life = LIFE; // life info in global letiable
    this.maze = new Maze();
    this.pacman = new PacMan(this.maze.PacMan_initial_pos.row, this.maze.PacMan_initial_pos.col); // initialize pacman
    this.ghosts = [];
    this.ghosts[0] = new Ghost("Blinky", this.maze.Blinky_initial_pos.row, this.maze.Blinky_initial_pos.col); // initialize ghosts
    this.ghosts[1] = new Ghost("Pinky", this.maze.Pinky_initial_pos.row, this.maze.Pinky_initial_pos.col);
    this.ghosts[2] = new Ghost("Inky", this.maze.Inky_initial_pos.row, this.maze.Inky_initial_pos.col);
    this.ghosts[3] = new Ghost("Clyde", this.maze.Clyde_initial_pos.row, this.maze.Clyde_initial_pos.col);
    this.life_icon = sprites[5][7]; // icon to display the number of life left
  }

  display() {
    // move pacman & ghosts
    this.pacman.move();
    for (let i = 0; i < this.ghosts.length; i++) {
      this.ghosts[i].move();
    }
    
    // display maze, pacman, ghosts
    this.maze.display();
    this.pacman.display();
    for (let i = 0; i < this.ghosts.length; i++) {
      this.ghosts[i].display();
    }
    for (let i = 0; i < this.life; i++) { // display life
      image(this.life_icon, 10 + i*this.pacman.size, 35 + BOARD_H, this.pacman.size, this.pacman.size);
    }

    this.update(); // update the game (pacman eating pacdots, pacman meeting ghosts, check if the game clear/over)

    this.check_available_direction_for_pacman(); // check next possible direction for pacman
    for (let i = 0; i < this.ghosts.length; i++) {
      this.check_available_direction_for_ghosts(this.ghosts[i]); // check next possible direction for ghosts
      if (!(this.ghosts[i].available_direction.includes(this.ghosts[i].direction))) {
        this.ghosts[i].change_direction();  // change ghost direction randomly
      }
    }
  }
  
  // check possible direction of pacman
  check_available_direction_for_pacman() {
    this.pacman.available_direction = []; // clear info from the previous position

    // check possible direction of pacman
    for (let i = 0; i < this.maze.valid_area.length; i++) { // loop all valid area in the maze
      let ith_valid_area = this.maze.valid_area[i];
      // warp tunnel
      if ( this.pacman.row == 10 && this.pacman.col == 0 )
        this.pacman.available_direction.push("left");
      if ( this.pacman.row == 10 && this.pacman.col == 40 )
        this.pacman.available_direction.push("right");
      // other valid area
      if ( this.pacman.row == ith_valid_area.row && this.pacman.col - 1 == ith_valid_area.col ) {
        this.pacman.available_direction.push("left");
      }
      if ( this.pacman.row == ith_valid_area.row && this.pacman.col + 1 == ith_valid_area.col ) {
        this.pacman.available_direction.push("right");
      }
      if ( this.pacman.col == ith_valid_area.col && this.pacman.row - 1 == ith_valid_area.row ) {
        this.pacman.available_direction.push("up");
      }
      if ( this.pacman.col == ith_valid_area.col && this.pacman.row + 1 == ith_valid_area.row ) {
        this.pacman.available_direction.push("down");
      }
    }
  }
  
  // check possible direction of each ghost
  check_available_direction_for_ghosts(ghost) {
    ghost.available_direction = []; // clear info from the previous position
    
    // ghost house
    // if ghost in on the ghost house exit, only choice is to go up
    if ( ghost.row == this.maze.ghost_house_exit.row && ghost.col == this.maze.ghost_house_exit.col ) {
      ghost.available_direction.push("up");
      return;
    }
    else if ( ghost.row - 1 == this.maze.ghost_house_exit.row && ghost.col == this.maze.ghost_house_exit.col ) {
      ghost.available_direction.push("up");
      return;
    }
    // otherwise, if ghost in the ghost house, move around the house
    for (let i = 0; i < this.maze.ghost_house.length; i++) {
      let ghost_house_area = this.maze.ghost_house[i];
      if ( ghost.row == ghost_house_area.row && ghost.col - 1 == ghost_house_area.col ) {
        ghost.available_direction.push("left");
      }
      if ( ghost.row == ghost_house_area.row && ghost.col + 1 == ghost_house_area.col ) {
        ghost.available_direction.push("right");
      }
      if ( ghost.col == ghost_house_area.col && ghost.row - 1 == ghost_house_area.row ) {
        ghost.available_direction.push("up");
      }
      if ( ghost.col == ghost_house_area.col && ghost.row + 1 == ghost_house_area.row ) {
        ghost.available_direction.push("down");
      }
    }

    // move around the valid area
    for (let i = 0; i < this.maze.valid_area.length; i++) {
      let ith_valid_area = this.maze.valid_area[i];
      // warp tunnel
      if ( ghost.row == 10 && ghost.col == 0 )
        ghost.available_direction.push("left");
      if ( ghost.row == 10 && ghost.col == 40 )
        ghost.available_direction.push("right");
      // other valid area
      if ( ghost.row == ith_valid_area.row && ghost.col - 1 == ith_valid_area.col ) { // other valid area
        ghost.available_direction.push("left");
      }
      if ( ghost.row == ith_valid_area.row && ghost.col + 1 == ith_valid_area.col ) {
        ghost.available_direction.push("right");
      }
      if ( ghost.col == ith_valid_area.col && ghost.row - 1 == ith_valid_area.row ) {
        ghost.available_direction.push("up");
      }
      if ( ghost.col == ith_valid_area.col && ghost.row + 1 == ith_valid_area.row ) {
        ghost.available_direction.push("down");
      }
    }
  }

  update() {
    // remove pacdots if pacman ate it
    for (let i = 0; i < this.maze.pacdots.length; i++) {
      let ith_pacdot = this.maze.pacdots[i];
      if ( this.pacman.row == ith_pacdot.row && this.pacman.col == ith_pacdot.col) {
        this.maze.pacdots.splice(i, 1);
      }
    }
    
    // when pacman meets the ghost, decrement the life and start a new round
    let count = 0;
    while( count < this.ghosts.length ) { // used while loop to make sure the program doesn't proceed until check for all ghosts
      if( (pow(this.pacman.row - this.ghosts[count].row, 2) + pow(this.pacman.col - this.ghosts[count].col, 2)) <= 1 ) {
        death_sound.play();
        this.life--;
        this.start_new_round();
      }
      count++;
    }
  }
 
  start_new_round() {
    background(0); // display black screen for a moment
    let new_pacman = new PacMan(this.maze.PacMan_initial_pos.row, this.maze.PacMan_initial_pos.col); // initialize characters again
    let new_Blinky = new Ghost("Blinky", this.maze.Blinky_initial_pos.row, this.maze.Blinky_initial_pos.col);
    let new_Pinky = new Ghost("Pinky", this.maze.Pinky_initial_pos.row, this.maze.Pinky_initial_pos.col);
    let new_Inky = new Ghost("Inky", this.maze.Inky_initial_pos.row, this.maze.Inky_initial_pos.col);
    let new_Clyde = new Ghost("Clyde", this.maze.Clyde_initial_pos.row, this.maze.Clyde_initial_pos.col);
    this.pacman = new_pacman; // reassign characters
    this.ghosts[0] = new_Blinky;
    this.ghosts[1] = new_Pinky;
    this.ghosts[2] = new_Inky;
    this.ghosts[3] = new_Clyde;
  }

  check_end() {
    if( this.life == 0 ) { // game over
      background(0);
      fill(255,255,255);
      textSize(30);
      text("GAME   OVER", width/2, height/2);
      textSize(20);
      text("PRESS   ANY   KEY   TO   RESTART", width/2, height/3*2);
      return true;
    }
    else if( this.maze.pacdots.length == 0 ) { // game clear
      background(0);
      fill(255,255,255);
      textSize(30);
      text("GAME   CLEAR!", width/2, height/2);
      textSize(20);
      text("PRESS  ANY   KEY   TO   RESTART", width/2, height/3*2);
      return true;
    }
    else { // continue the current game
      return false;
    }
  }
}

// global letiables
let path; // current tproject directory
let spritesheet; // image spritesheet
let sprites = [];
let sprites_w;
let sprites_h;
let logo; // logo image
let beginning_sound; // sound effects
let death_sound;
let ArcadeClassic; // font

let start; // true if the game started
let game;

function preload() {
  ArcadeClassic = loadFont("font/ArcadeClassic.TTF");
  logo = loadImage("images/logo.svg"); // load logo img
  spritesheet = loadImage("images/sprites.png"); // load image files

  // load sound files
  soundFormats('wav');
  beginning_sound = loadSound("sound/intro");
  death_sound = loadSound("sound/death");
}

function setup() {
  background(10);
  createCanvas(492, 300);
  fill(255,255,255);
  textSize(20);
  textFont(ArcadeClassic);
  textAlign(CENTER); // align every text to center
  
  sprites_w = spritesheet.width/16;
  sprites_h = spritesheet.height/16;
  for (let r = 0; r < 16; r++) {
    sprites[r] = []; // create nested array
    for (let c = 0; c < 16; c++) {
      sprites[r][c] = spritesheet.get(c*sprites_w, r*sprites_h, sprites_w, sprites_h);
    }
  }
  
  start = false; // initialize start as false, until the user clicks the key
  game = new Game();
}

function draw() {
  if (start == true) {
    if (frameCount % 10 == 0) { // slow down everything, including pacman & ghost speed
      game.display();
    }
    if (game.check_end() == true) { // if game ended, stop draw function and set start as false
      noLoop();
      start = false;
    }
  }
  else {
    background(10);
    //text("IM   PAC-MAN  (<", width/2, height/2); // tried text logo
    image(logo, width/2 - width/10*4, 50, width/5*4, height/5*2); // display logo image
    textSize(30);
    text("IM", width/8*6, height/5*3);
    textSize(20);
    text("PRESS   ANY   KEY   TO   START\n ARROW   KEY   TO   MOVE", width/2, height/5*4);
  }
}

function keyPressed() {
  if (game.check_end() == true) { // if game ended, user can restart by pressing any key
    game = new Game();
    start = true;
    beginning_sound.play();
    loop();
  }
  
  if (start == false) { // press any button to start
    start = true;
    beginning_sound.play();
  } else if (start == true) {
    // Change direction of PacMan using arrow keys
    if (keyCode == UP_ARROW && game.pacman.available_direction.includes("up")) {
      game.pacman.direction = "up";
    } else if (keyCode == DOWN_ARROW && game.pacman.available_direction.includes("down")) {
      game.pacman.direction = "down";
    } else if (keyCode == LEFT_ARROW && game.pacman.available_direction.includes("left")) {
      game.pacman.direction = "left";
    } else if (keyCode == RIGHT_ARROW && game.pacman.available_direction.includes("right")) {
      game.pacman.direction = "right";
    }
  }
}