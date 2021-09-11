function setup(){
  createCanvas(displayWidth, displayHeight);
  player = createSprite(displayWidth/2, displayHeight/2 + 175, 100, 20);
  player.shapeColor = 'blue';

  ball1 = createSprite(displayWidth/2, displayHeight/2 - 200, 20, 20);
  ball1.shapeColor = 'red';
  ball1.velocityY = random(10, 30);
  ball1.velocityX = random(10, 30);

  ball2 = createSprite(displayWidth/2, displayHeight/2 - 250, 20, 20);
  ball2.shapeColor = 'green';
  ball2.velocityY = random(0, 20);
  ball2.velocityX = random(0, 20);
}

function draw(){
  background(0);
  player.x = mouseX;
  edges = createEdgeSprites();

  ball1.bounceOff(edges[0]);
  ball1.bounceOff(edges[1]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(player);

  ball2.bounceOff(edges[0]);
  ball2.bounceOff(edges[1]);
  ball2.bounceOff(edges[2]);
  ball2.bounceOff(player);
  if(ball1.y > displayHeight + 100 || ball2.y > displayHeight + 100){
    ball1.destroy();
    player.destroy();
    ball2.destroy();
    textSize(40);
    fill('yellow');
    text('Game over !!', displayWidth/2 - 100, displayHeight/2);
  }
  drawSprites();
}