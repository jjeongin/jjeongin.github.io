// Creator: Jeongin Lee
// Created date: Sept 29, 2021
// Description: Data visualization of meteorites landed on Earth throught the history
// Data sets:
// Meteorite landing history (https://www.kaggle.com/nasa/meteorite-landings)
// Country coordinates (https://www.kaggle.com/parulpandey/world-coordinates)

// global variables
let R = 200;

// meteor class
class Meteor {
  constructor(_lat, _lon, _mass) {
    this.lat = _lat;
    this.lon = _lon;
    this.mass = _mass;
  }
  
  draw_meteor() {
    // convert lat, lon to Cartesian coordinates (reference : https://stackoverflow.com/questions/1185408/converting-from-longitude-latitude-to-cartesian-coordinates)
    let x = R * cos(this.lat) * cos(this.lon);
    let y = R * cos(this.lat) * sin(this.lon);
    let z = R * sin(this.lat);
    stroke(255, 100);
    strokeWeight(0.5);
    point(x*1.2, y*1.2, z*1.2);
  }
}

// helper method to visualize sphere shape
function draw_earth() {
  noStroke();
  noFill();
  lights();
  sphere(200);
}

let table;
let meteors = []; // defined as dynamic array as there are some invalid data missing one or two necessary parameters

function preload() {
    table = loadTable("data/meteorite_landings.csv", 'csv', 'header');
}

function setup() {
  background(20); // settings
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // load meteorites data
  for(let r = 0; r < table.getRowCount(); r++) {
    try {
        let mass = float(table.getString(r, 4));
        let lat = float(table.getString(r, 7));
        let lon = float(table.getString(r, 8));
        meteors.push(new Meteor(lat, lon, mass));
    } catch (e) {
        continue;
    }
  }
}

function draw() {
  background(20); // reset background
  
  rotateX(mouseY * 0.01); // rotate the earth
  rotateY(mouseX * 0.01);
  
  for(let i = 0; i < meteors.length; i++) {
    let meteor = meteors[i];
    meteor.draw_meteor();
  }
}

// resize canvas when window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// full screen when mouse pressed
function mousePressed() {
    if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}