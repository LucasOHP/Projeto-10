var p5Inst = new p5(null, 'sketch');
console.log('AAA TESTEA');
window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


function draw() {
  
  background('black');
  
  createEdgeSprites();
  
  sofia.bounceOff(edges);
  
  drawSprites();
  
  pintarSprites();
  
  criarTextos();
  
  colisao();
  
  movimento();
  
  final();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function pintarSprites() {
  
sofia.shapeColor = 'beige';
alvo.shapeColor = 'gold'; 
wall1.shapeColor = 'silver';
wall2.shapeColor = 'silver';
wall3.shapeColor = 'silver';
wall4.shapeColor = 'silver';
wall5.shapeColor = 'silver';
wall6.shapeColor = 'silver';
wall7.shapeColor = 'silver';
wall8.shapeColor = 'silver';
wall9.shapeColor = 'silver';
wall10.shapeColor = 'silver';
wall11.shapeColor = 'silver';
wall12.shapeColor = 'silver';
wall13.shapeColor = 'silver';
wall14.shapeColor = 'silver';
wall15.shapeColor = 'silver';
wall16.shapeColor = 'silver';
wall17.shapeColor = 'silver';
wall18.shapeColor = 'silver';
wall19.shapeColor = 'silver';
wall20.shapeColor = 'silver';
wall21.shapeColor = 'silver';
wall22.shapeColor = 'silver';
  
}

function movimento() {
  if(keyDown('up')){
  sofia.y = sofia.y-5;
  }
  if(keyDown('down')){
  sofia.y = sofia.y+5;
  }
  if(keyDown('left')){
  sofia.x = sofia.x-5;
  }
  if(keyDown('right')){
  sofia.x = sofia.x+5;
  }
}

function colisao() {
  if(sofia.isTouching(wall1)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall2)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall3)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall4)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall5)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall6)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall7)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall8)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall9)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall10)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall11)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall12)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall13)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall14)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall15)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall6)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall17)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall18)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall19)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall20)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall21)){
    sofia.x = 15;
    sofia.y = 15;
  }
  if(sofia.isTouching(wall22)){
    sofia.x = 15;
    sofia.y = 15;
  }
}

function criarTextos() {
  textAlign(CENTER, TOP);
  text("sofia", 15, 40);
  text("Taça", 360, 380);
  
}

function final() {
  if(sofia.isTouching(alvo)){
    background('white');
    textSize(85);
    textAlign(CENTER, CENTER);
    text('FINAL', 200, 200);
  }
}
var sofia = createSprite(15, 15, 25, 25);

var alvo = createSprite(385, 385, 10, 10);

var wall1 = createSprite(50, 50, 20, 100);
var wall2 = createSprite(50, 150, 20, 100);
var wall3 = createSprite(240, 187, 20, 100);
var wall4 = createSprite(147, 239, 20, 100);
var wall5 = createSprite(350, 355, 100, 20);
var wall6 = createSprite(80, 300, 100, 20);
var wall7 = createSprite(254, 370, 20, 100);
var wall8 = createSprite(340, 260, 20, 100);
var wall9 = createSprite(280, 220, 100, 20);
var wall10 = createSprite(147, 140, 20, 100);
var wall11 = createSprite(295, 260, 20, 100);
var wall12 = createSprite(110, 397, 20, 100);
var wall13 = createSprite(180, 350, 100, 20);
var wall14 = createSprite(320, 90, 20, 100);
var wall15 = createSprite(320, 90, 100, 20);
var wall16 = createSprite(400, 0, 20, 100);
var wall17 = createSprite(280, 120, 20, 100);
var wall18 = createSprite(133, 140, 100, 20);
var wall19 = createSprite(200, 25, 100, 20);
var wall20 = createSprite(195, 200, 20, 100);
var wall21 = createSprite(392, 280, 20, 100);
var wall22 = createSprite(200, 0, 20, 100);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
