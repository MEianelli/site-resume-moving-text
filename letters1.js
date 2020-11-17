var possible = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789"
var textPosX = 15;
var textPosY = 11;
var minWall = 10;
var points = [];
var MyFont;

function preload() {
  MyFont = ('../Fonts/RobotoCondensed-Regular.ttf');
}

function setup() {
  var canvas = createCanvas(530,415);
  canvas.parent("contentRight");
  background(255);
  angleMode(DEGREES);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  for (var i = 0; i < 200; i++) {
    points.push(new Point(randomLetter(possible)));
  }
}

function draw() {
  background(255);
  for (var i = points.length-1; i >= 0; i--) {
    points[i].show();
    points[i].update();
  }
}

function composeText(obj) {
  moveTo(textPosX,textPosY,obj);
  if(textPosX > width-30){
    textPosX = 10;
    textPosY += 18;
  } else{
    textPosX += 11;
  }
}

function moveTo(x,y,obj){
  let destination = createVector(x,y);
  destination.sub(obj.pos);
  let angle = atan2(destination.y,destination.x);
  obj.vel = createVector(cos(angle) * 2,sin(angle) * 2);
  obj.acc = createVector(cos(angle) * 5,sin(angle) * 5);
  obj.stopPos = createVector(x,y);
}

function convertArray(array) {
  if(array.length > points.length){
    for (var i = 0; i < points.length; i++) {
      points[i].value = array[i];
    }
    for (var i = points.length; i < array.length; i++) {
      points.push(new Point(array[i]));
    }
  } else{
    for (var i = 0; i < array.length; i++) {
      points[i].value = array[i];
    }
    for (var i = points.length-1; i >= array.length ; i--) {
      points.pop();
    }
  }
}

function sendString(string,offSetY) {
  let arr = string.split("");
  convertArray(arr);
  for (var i = 0; i < points.length; i++) {
    composeText(points[i]);
  }
}

function resetStoped() {
  textPosX = 15;
  textPosY = 11;
  for (var i = points.length-1; i >= 0; i--) {
    points[i].vel = createVector(random(10) - 5, random(10) - 5);
  }
}
function randomLetter(string) {
  var text = "";
  string = string.split("");
  var text = string[Math.floor(Math.random() * string.length)];
  return text;
}

class Point {
  constructor(string) {
    this.value = string;
    this.pos = createVector(random(width),random(minWall,height-minWall));
    this.vel = createVector(random(10) - 5, random(10) - 5);
    this.acc = createVector();
    this.stopPos = createVector();
  }
  show(){
    fill(51);
    textSize(16);
    textFont(MyFont);
    text(this.value,this.pos.x,this.pos.y);
  }
  update(){
    this.pos.add(this.vel);
    this.pos.add(this.acc);
    this.constrain();
    if(this.stopPos.x !== 0){
      this.stopCheck();
    }
  }
  stopCheck(){
    let x = this.stopPos.x - this.pos.x
    let y = this.stopPos.y - this.pos.y
    let distance = createVector(x,y)
    if(distance.mag() < 10){
      this.vel = createVector();
      this.acc = createVector();
      this.pos = this.stopPos;
      this.stopPos = createVector();
    }
  }

  constrain(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x = this.vel.x * -1;
    }
    if(this.pos.y < minWall || this.pos.y > height-minWall){
      this.vel.y = this.vel.y * -1;
    }
  }
}
