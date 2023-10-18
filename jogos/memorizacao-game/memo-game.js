/*
 *
 * @author Sakri Rosenstrom
 * http://www.sakri.net
 * https://twitter.com/sakri
 * http://www.devstate.net
 * Sources for this can be found at:
 * https://github.com/sakri/sakriNetCommonJS
 */


(function (window){

    var Sakri = window.Sakri || {};
    window.Sakri = window.Sakri || Sakri;
      
      Sakri.MathUtil = {};
      
      //used for radiansToDegrees and degreesToRadians
      Sakri.MathUtil.PI_180 = Math.PI/180;
      Sakri.MathUtil.ONE80_PI = 180/Math.PI;
      
      //precalculations for values of 90, 270 and 360 in radians
      Sakri.MathUtil.PI2 = Math.PI*2;
      Sakri.MathUtil.HALF_PI = Math.PI/2;
  
  
      //return number between 1 and 0
      Sakri.MathUtil.normalize = function(value, minimum, maximum){
          return (value - minimum) / (maximum - minimum);
      };
  
      //map normalized number to values
      Sakri.MathUtil.interpolate = function(normValue, minimum, maximum){
          return minimum + (maximum - minimum) * normValue;
      };
  
      //map a value from one set to another
      Sakri.MathUtil.map = function(value, min1, max1, min2, max2){
          return Sakri.MathUtil.interpolate( Sakri.MathUtil.normalize(value, min1, max1), min2, max2);
      };
  
      Sakri.MathUtil.getRandomNumberInRange = function(min, max){
          return min + Math.random() * (max - min);
      };
      
      Sakri.MathUtil.getRandomIntegerInRange = function(min, max){
          return Math.round(Sakri.MathUtil.getRandomNumberInRange(min, max));
      };
  
      
  }(window));
  
  (function (window){
  
      var Sakri = window.Sakri || {};
      window.Sakri = window.Sakri || Sakri;
  
        Sakri.Geom = {};
  
      //==================================================
      //=====================::POINT::====================
      //==================================================
  
      Sakri.Geom.Point = function (x,y){
          this.x = isNaN(x) ? 0 : x;
          this.y = isNaN(y) ? 0 : y;
      };
  
      Sakri.Geom.Point.prototype.clone = function(){
          return new Sakri.Geom.Point(this.x,this.y);
      };
  
      Sakri.Geom.Point.prototype.update = function(x, y){
          this.x = isNaN(x) ? this.x : x;
          this.y = isNaN(y) ? this.y : y;
      };
  
      Sakri.Geom.Point.prototype.equals = function(point){
          return this.x==point.x && this.y==point.y;
      };
  
      Sakri.Geom.Point.prototype.toString = function(){
          return "{x:"+this.x+" , y:"+this.y+"}";
      };
  
  
      
      //==================================================
      //===================::RECTANGLE::==================
      //==================================================
  
      Sakri.Geom.Rectangle = function (x, y, width, height){
          this.update(x, y, width, height);
      };
      
      Sakri.Geom.Rectangle.prototype.update = function(x, y, width, height){
          this.x = isNaN(x) ? 0 : x;
          this.y = isNaN(y) ? 0 : y;
          this.width = isNaN(width) ? 0 : width;
          this.height = isNaN(height) ? 0 : height;
      };
  
    
      Sakri.Geom.Rectangle.prototype.getRight = function(){
          return this.x + this.width;
      };
      
      Sakri.Geom.Rectangle.prototype.getBottom = function(){
          return this.y + this.height;
      };
  
      Sakri.Geom.Rectangle.prototype.getCenterX = function(){
          return this.x + this.width/2;
      };
  
      Sakri.Geom.Rectangle.prototype.getCenterY = function(){
          return this.y + this.height/2;
      };
  
      Sakri.Geom.Rectangle.prototype.containsPoint = function(x, y){
          return x >= this.x && y >= this.y && x <= this.getRight() && y <= this.getBottom();
      };
  
      
      Sakri.Geom.Rectangle.prototype.clone = function(){
          return new Sakri.Geom.Rectangle(this.x, this.y, this.width, this.height);
      };
      
      Sakri.Geom.Rectangle.prototype.toString = function(){
          return "Rectangle{x:"+this.x+" , y:"+this.y+" , width:"+this.width+" , height:"+this.height+"}";
      };
      
  }(window));
  
  
  /**
   * Created by sakri on 27-1-14.
   * has a dependecy on Sakri.Geom
   * has a dependecy on Sakri.BitmapUtil
   */
  
  (function (window){
  
      var Sakri = window.Sakri || {};
      window.Sakri = window.Sakri || Sakri;
  
      Sakri.CanvasTextUtil = {};
  
      //returns the biggest font size that best fits into rect
      Sakri.CanvasTextUtil.getFontSizeForRect = function(string, fontProps, rect, canvas, fillStyle){
          if(!canvas){
              var canvas = document.createElement("canvas");
          }
          if(!fillStyle){
              fillStyle = "#000000";
          }
          var context = canvas.getContext('2d');
          context.font = fontProps.getFontString();
          context.textBaseline = "top";
  
          var copy = fontProps.clone();
          //console.log("getFontSizeForRect() 1  : ", copy.fontSize);
          context.font = copy.getFontString();
          var width = context.measureText(string).width;
          //console.log(width, rect.width);
  
          //SOME DISAGREEMENT WHETHER THIS SHOOULD BE WITH && or ||
          if(width < rect.width){
              while(context.measureText(string).width < rect.width || copy.fontSize*1.5 < rect.height){
                  copy.fontSize++;
                  context.font = copy.getFontString();
              }
          }else if(width > rect.width){
              while(context.measureText(string).width > rect.width || copy.fontSize*1.5 > rect.height){
                  copy.fontSize--;
                  context.font = copy.getFontString();
              }
          }
          //console.log("getFontSizeForRect() 2  : ", copy.fontSize);
          return copy.fontSize;
      }
  
      //=========================================================================================
      //==============::CANVAS TEXT PROPERTIES::====================================
      //========================================================
  
      Sakri.CanvasTextProperties = function(fontWeight, fontStyle, fontSize, fontFace){
          this.setFontWeight(fontWeight);
          this.setFontStyle(fontStyle);
          this.setFontSize(fontSize);
          this.fontFace = fontFace ? fontFace : "sans-serif";
      };
  
      Sakri.CanvasTextProperties.NORMAL = "normal";
      Sakri.CanvasTextProperties.BOLD = "bold";
      Sakri.CanvasTextProperties.BOLDER = "bolder";
      Sakri.CanvasTextProperties.LIGHTER = "lighter";
  
      Sakri.CanvasTextProperties.ITALIC = "italic";
      Sakri.CanvasTextProperties.OBLIQUE = "oblique";
  
  
      Sakri.CanvasTextProperties.prototype.setFontWeight = function(fontWeight){
          switch (fontWeight){
              case Sakri.CanvasTextProperties.NORMAL:
              case Sakri.CanvasTextProperties.BOLD:
              case Sakri.CanvasTextProperties.BOLDER:
              case Sakri.CanvasTextProperties.LIGHTER:
                  this.fontWeight = fontWeight;
                  break;
              default:
                  this.fontWeight = Sakri.CanvasTextProperties.NORMAL;
          }
      };
  
      Sakri.CanvasTextProperties.prototype.setFontStyle = function(fontStyle){
          switch (fontStyle){
              case Sakri.CanvasTextProperties.NORMAL:
              case Sakri.CanvasTextProperties.ITALIC:
              case Sakri.CanvasTextProperties.OBLIQUE:
                  this.fontStyle = fontStyle;
                  break;
              default:
                  this.fontStyle = Sakri.CanvasTextProperties.NORMAL;
          }
      };
  
      Sakri.CanvasTextProperties.prototype.setFontSize = function(fontSize){
          if(fontSize && fontSize.indexOf && fontSize.indexOf("px")>-1){
              var size = fontSize.split("px")[0];
              fontProperites.fontSize = isNaN(size) ? 24 : size;//24 is just an arbitrary number
              return;
          }
          this.fontSize = isNaN(fontSize) ? 24 : fontSize;//24 is just an arbitrary number
      };
  
      Sakri.CanvasTextProperties.prototype.clone = function(){
          return new Sakri.CanvasTextProperties(this.fontWeight, this.fontStyle, this.fontSize, this.fontFace);
      };
  
      Sakri.CanvasTextProperties.prototype.getFontString = function(){
          return this.fontWeight + " " + this.fontStyle + " " + this.fontSize + "px " + this.fontFace;
      };
  
  }(window));
  
  
  window.requestAnimationFrame =
          window.__requestAnimationFrame ||
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  (function () {
                      return function (callback, element) {
                          var lastTime = element.__lastTime;
                          if (lastTime === undefined) {
                              lastTime = 0;
                          }
                          var currTime = Date.now();
                          var timeToCall = Math.max(1, 33 - (currTime - lastTime));
                          window.setTimeout(callback, timeToCall);
                          element.__lastTime = currTime + timeToCall;
                      };
                  })();
  
  var readyStateCheckInterval = setInterval( function() {
      if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          init();
      }
  }, 10);
  
  //========================
  //general properties for demo set up
  //========================
  
  var canvas;
  var context;
  var canvasContainer;
  var htmlBounds;
  var bounds;
  var minimumStageWidth = 300;
  var minimumStageHeight = 300;
  var maxStageWidth = 800;
  var maxStageHeight = 1100;
  var resizeTimeoutId = -1;
  //var stats;
  
  function init(){
      canvasContainer = document.getElementById("canvasContainer");
      window.onresize = resizeHandler;
      //stats = new Stats();
      //canvasContainer.appendChild( stats.getDisplayElement() );
      window.addEventListener( "keydown", keyUpEventHandler, false )
      commitResize();
  }
  
  function getWidth( element ){return Math.max(element.scrollWidth,element.offsetWidth,element.clientWidth );}
  function getHeight( element ){return Math.max(element.scrollHeight,element.offsetHeight,element.clientHeight );}
  
  //avoid running resize scripts repeatedly if a browser window is being resized by dragging
  function resizeHandler(){
      context.clearRect(0,0,canvas.width, canvas.height);
      clearTimeout(resizeTimeoutId);
      clearTimeoutsAndIntervals();
      resizeTimeoutId = setTimeout(commitResize, 300 );
  }
  
  function commitResize(){
      if(canvas){
          canvasContainer.removeChild(canvas);
      }
      canvas = document.createElement('canvas');
      canvas.style.position = "absolute";
      context = canvas.getContext("2d");
      canvasContainer.appendChild(canvas);
  
      htmlBounds = new Sakri.Geom.Rectangle(0,0, getWidth(canvasContainer) , getHeight(canvasContainer));
      if(htmlBounds.width >= maxStageWidth){
          canvas.width = maxStageWidth;
          canvas.style.left = htmlBounds.getCenterX() - (maxStageWidth/2)+"px";
      }else{
          canvas.width = htmlBounds.width;
          canvas.style.left ="0px";
      }
      if(htmlBounds.height > maxStageHeight){
          canvas.height = maxStageHeight;
          canvas.style.top = htmlBounds.getCenterY() - (maxStageHeight/2)+"px";
      }else{
          canvas.height = htmlBounds.height;
          canvas.style.top ="0px";
      }
      bounds = new Sakri.Geom.Rectangle(0,0, canvas.width, canvas.height);
      context.clearRect(0,0,canvas.width, canvas.height);
  
      if(bounds.width<minimumStageWidth || bounds.height<minimumStageHeight){
          stageTooSmallHandler();
          return;
      }
  
      var textInputSpan = document.getElementById("textInputSpan");
      var textInputSpanY = (canvas.height - canvas.height*.85)/2 + 15;//15 is an estimate for half of textInputHeight
      textInputSpan.style.top = htmlBounds.getCenterY() + (bounds.height/2) - textInputSpanY +"px";
      textInputSpan.style.left = (htmlBounds.getCenterX() - getWidth(textInputSpan)/2)+"px";
  
      startDemo();
  }
  
  function stageTooSmallHandler(){
      var warning = "Abra em seu computador";
      context.font = "bold normal 24px sans-serif";
      context.fillText(warning, bounds.getCenterX() - context.measureText(warning).width/2, bounds.getCenterY()-12);
  }
  
  
  
  
  //========================
  //Demo specific properties
  //========================
  
  
      var HOME = 0;
      var GAME = 1;
      var GAME_OVER = 2;
      var gameState;
      var scrollSpeed = 3;
      var score;
      var fontProperties = new Sakri.CanvasTextProperties(Sakri.CanvasTextProperties.BOLD, null, 100);
  
      var word = "ENGLISHWTVSHOWS";
  
      function startDemo(){
          canvas.addEventListener('touchstart', handleUserTap, false);
          canvas.addEventListener('mousedown', handleUserTap, false);
  
          var logoText = "MEMO WORDS";
          if(!logoCanvas){
              logoCanvas = document.createElement("canvas");
              logoCanvasBG = document.createElement("canvas");
          }
          createLogo("MEMO WORDS", logoCanvas, logoCanvasBG);
          if(!gameOverCanvas){
              gameOverCanvas = document.createElement("canvas");
              gameOverCanvasBG = document.createElement("canvas");
          }
          createLogo("FIM DE JOGO", gameOverCanvas, gameOverCanvasBG);
  
          createGroundPattern();
          createBird();
          createTubes();
          createCityGraphic();
          score = 0;
          gameState = HOME;
          loop();
      }
  
      function loop(){
          switch(gameState){
              case HOME:
                  renderHome();
                  break;
              case GAME :
                  renderGame();
                  break;
              case GAME_OVER:
                  renderGameOver();
                  break;
          }
          //stats.tick();
      }
  
      function handleUserTap(event){
          switch(gameState){
              case HOME:
                  gameState = GAME;
                  break;
              case GAME :
                  birdYSpeed = -tapBoost;
                  break;
              case GAME_OVER:
                  commitResize();
                  break;
          }
          if(event){
              event.preventDefault();
          }
      }
  
      function keyUpEventHandler(event){
          //event.keyCode == 32 -> Space
          if(event.keyCode == 38){
              handleUserTap(event);
          }
      }
  
      function renderHome(){
          context.clearRect(0, 0, canvas.width, canvas.height);
          renderGroundPattern();
          renderLogo();
          renderInstructions();
          window.requestAnimationFrame(loop, canvas);
      }
  
      function renderGame(){
          context.clearRect(0, 0, canvas.width, canvas.height);
          updateTubes();
          renderTubes();
          updateBird();
          if(!characters.length){
              gameOverHandler();
              return;
          }
          renderBird();
          renderGroundPattern();
          updateScore();
          renderScore();
          window.requestAnimationFrame(loop, canvas);
      }
  
      function gameOverHandler(){
          context.clearRect(0, 0, canvas.width, canvas.height);
          gameState = GAME_OVER;
          renderGameOver();
      }
  
      function renderGameOver(){
  
          //game over logo
          context.drawImage(gameOverCanvas, bounds.getCenterX() - logoCanvas.width/2, canvas.height *.2);
  
          var instruction = "Click p/ começar novamente.";
          context.font = "bold normal 24px sans-serif";
          context.fillStyle = "#FFFFFF";
          context.fillText(instruction, bounds.getCenterX() - context.measureText(instruction).width/2, canvas.height *.25 + gameOverCanvas.height);
          renderScore();
  
          //window.requestAnimationFrame(loop, canvas);
      }
  
      function renderLogo(){
          logoCurrentY += logoDirection;
          context.drawImage(logoCanvas, bounds.getCenterX() - logoCanvas.width/2, logoCurrentY);
          if(logoCurrentY <= logoY || logoCurrentY >= logoMaxY){
              logoDirection *= -1;
          }
      }
  
      function renderInstructions() {
        var instruction = "Click para começar ▶️🕹️";
        context.font = "bold 24px 'Your Custom Font', sans-serif"; // Use a custom font
        context.fillStyle = "#1874CD"; // Use a different color
        var textWidth = context.measureText(instruction).width;
      
        // Create a colorful button with a hover effect
        context.fillRect(bounds.getCenterX() - textWidth / 2 - 10, canvas.height * 0.2 - 30, textWidth + 20, 40);
    
      
        context.fillStyle = "#FFFFFF";
        context.fillText(instruction, bounds.getCenterX() - textWidth / 2, canvas.height * 0.2);
      }
  
      function renderScore() {
        var x = bounds.getCenterX();
        var y = bounds.height * 0.2;
      
        // Create a gradient fill for the score text
        var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "#FFFFFF"); // Start color
        gradient.addColorStop(1, "#FFFFFF"); // End color
      
        context.font = fontProperties.getFontString();
        context.fillStyle = gradient; // Apply the gradient fill
        context.strokeStyle = "#1874CD";
        context.lineWidth = 3;
      
        // Measure the width of the score text
        var scoreTextWidth = context.measureText(score).width;
      
        // Calculate the x coordinate for center alignment
        x = bounds.getCenterX() - scoreTextWidth / 2;
      
        // Apply a shadow effect
        context.shadowColor = "#0000";
        context.shadowBlur = 5;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
      
        // Draw the score text
        context.fillText(score, x, y);
        context.strokeText(score, x, y);
      
        // Remove the shadow effect
        context.shadowColor = "transparent";
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
      }
      
      
      //========================================================================
      //========================:: LOGO ::======================================
      //========================================================================
  
      var logoCanvas;
      var logoCanvasBG;
  
      var gameOverCanvas;
      var gameOverCanvasBG;
  
      var logoY;
      var logoCurrentY;
      var logoMaxY;
      var logoDirection;
  
      function createLogo(logoText, logoCanvas, logoCanvasBG) {
        logoCanvas.width = logoCanvasBG.width = canvas.width;
        logoCanvas.height = logoCanvasBG.height = canvas.height / 4;
        logoCurrentY = logoY = canvas.height * 0.25;
        logoMaxY = canvas.height * 0.35;
        logoDirection = 2;
      
        var logoContext = logoCanvas.getContext("2d");
        logoContext.textBaseline = "top";
      
        var textRect = new Sakri.Geom.Rectangle(0, 0, logoCanvas.width * 0.8, logoCanvas.height);
        var logoFontProps = fontProperties.clone();
        logoFontProps.fontSize = Sakri.CanvasTextUtil.getFontSizeForRect(logoText, fontProperties, textRect);
      
        var logoBGContext = logoCanvasBG.getContext("2d");
        logoBGContext.fillStyle = "#87CEEB"; // Light blue background color
        logoBGContext.fillRect(0, 0, logoCanvasBG.width, logoCanvasBG.height);
        logoBGContext.fillStyle = "#1874CD"; // Dark blue pattern color
        logoBGContext.fillRect(0, logoFontProps.fontSize / 2, logoCanvasBG.width, logoCanvasBG.height);
      
        logoContext.font = logoFontProps.getFontString();
        logoContext.fillStyle = logoContext.createPattern(logoCanvasBG, "repeat-x");
        logoContext.strokeStyle = "#FFFFFF"; // White border color
        logoContext.lineWidth = 2; // Increase the border width for emphasis
      
        var x = logoCanvas.width / 2 - logoContext.measureText(logoText).width / 2;
        var y = logoFontProps.fontSize / 2;
      
        logoContext.fillText(logoText, x, 0);
        logoContext.strokeText(logoText, x, 0);
      }
      
  
      //========================================================================
      //========================:: BIRD / BOXES ::==================================
      //========================================================================
  
      var birdCanvas;
      var birdYSpeed = 0;
      var gravity = 1;
      var tapBoost = 12;
      var birdSize = 60;
      
      function updateBird() {
        characters[0].y += birdYSpeed;
        birdYSpeed += gravity;
      
        // Floor collision
        if (characters[0].y >= groundGraphicRect.y - birdCanvas.height) {
          characters[0].y = groundGraphicRect.y - birdCanvas.height;
          birdYSpeed = 0;
        }
        // Ceiling collision
        if (characters[0].y <= 0) {
          characters[0].y = 1;
          birdYSpeed = 0;
        }
        // Tube collision
        if (!isHit && checkTubesCollision()) {
          context.fillStyle = "#FFFFFF";
          context.fillRect(0, 0, canvas.width, canvas.height);
          removeCharacter();
          isHit = true;
        }
      }
      
      var currentTube;
      var isHit = false;
      var ffScoreBugFix = 0;
      
      function updateScore() {
        if (ffScoreBugFix > 10 && currentTube.topRect.getRight() < characters[0].x) {
          if (!isHit) {
            score++;
          }
          isHit = false;
          var index = tubes.indexOf(currentTube) + 1;
          index %= tubes.length;
          currentTube = tubes[index];
          ffScoreBugFix = 0;
        }
        ffScoreBugFix++;
      }
      
      function renderBird() {
        context.drawImage(characters[0].image, characters[0].x, characters[0].y);
        for (var i = 1; i < characters.length; i++) {
          characters[i].y = characters[i - 1].y - (characters[i - 1].y - characters[i].y) * 0.9;
          context.drawImage(characters[i].image, characters[i].x, characters[i].y);
        }
      }
      
      function removeCharacter() {
        if (characters.length == 1) {
          // Game over
          gameState = GAME_OVER;
        }
        for (var i = 0; i < characters.length - 1; i++) {
          characters[i].image = characters[i + 1].image;
        }
        characters.pop();
      }
      
      function checkTubesCollision() {
        for (var i = 0; i < tubes.length; i++) {
          if (checkTubeCollision(tubes[i])) {
            return true;
          }
        }
        return false;
      }
      
      var collisionPoint = new Sakri.Geom.Point();
      var birdPoints = [];
      
      function checkTubeCollision(tube) {
        birdPoints[0] = characters[0].x;
        birdPoints[1] = characters[0].y;
        birdPoints[2] = characters[0].x + birdSize;
        birdPoints[3] = characters[0].y;
        birdPoints[4] = characters[0].x + birdSize;
        birdPoints[5] = characters[0].y + birdSize;
        birdPoints[6] = characters[0].x;
        birdPoints[7] = characters[0].y + birdSize;
        for (var i = 0; i < 8; i += 2) {
          collisionPoint.x = birdPoints[i];
          collisionPoint.y = birdPoints[i + 1];
          if (
            tube.topRect.containsPoint(collisionPoint.x, collisionPoint.y) ||
            tube.bottomRect.containsPoint(collisionPoint.x, collisionPoint.y)
          ) {
            return true;
          }
        }
        return false;
      }
      
      var characters;
      var birdFontProperties = new Sakri.CanvasTextProperties(
        Sakri.CanvasTextProperties.BOLD,
        null,
        50
      );
      
      function createBird() {
        if (!birdCanvas) {
          birdCanvas = document.createElement("canvas");
        }
        birdCanvas.width = birdSize;
        birdCanvas.height = birdSize;
      
        characters = [];
        characters[0] = {};
        characters[0].x = canvas.width / 3;
        characters[0].y = groundGraphicRect.y / 2;
        characters[0].image = createCharacterSquare(word.charAt(word.length - 1));
      
        var x = characters[0].x - (birdCanvas.width + birdCanvas.width * 0.2);
        for (var i = 1; i < word.length; i++) {
          characters[i] = {};
          characters[i].x = x;
          characters[i].y = characters[0].y;
          x -= birdCanvas.width + birdCanvas.width * 0.2;
          characters[i].image = createCharacterSquare(word.charAt(word.length - i - 1));
        }
      }
      
      function createCharacterSquare(character) {
        var birdContext = birdCanvas.getContext("2d");
        birdContext.clearRect(0, 0, birdSize, birdSize);
      
        // Set square box properties
        var boxSize = birdSize / 1.0;
        var boxX = (birdSize - boxSize) / 2;
        var boxY = (birdSize - boxSize) / 2;
        var borderRadius = 10; // Adjust the border radius as needed
      
        // Create a linear gradient for the box
        var gradient = birdContext.createLinearGradient(0, boxY, 0, boxY + boxSize);
        gradient.addColorStop(0, "#87CEEB"); // Light blue color at the top
        gradient.addColorStop(1, "#1874CD"); // Dark blue color at the bottom
      
        // Fill the square box with the gradient and border radius
        birdContext.fillStyle = gradient;
        birdContext.roundRect(boxX, boxY, boxSize, boxSize, borderRadius); // Custom function to create a rounded rectangle
        birdContext.fill();
      
        // Set text properties
        var fontSize = 12; // Adjust the font size here
        var yOffset = -2.5; // Move the text 5 pixels down
        birdContext.font = birdFontProperties.getFontString(fontSize);
        birdContext.fillStyle = "#000"; // Black color
        birdContext.textAlign = "center";
        birdContext.textBaseline = "middle";
      
        // Draw the character slightly lower in the square box
        birdContext.fillText(character, birdSize / 2, birdSize / 2 + yOffset);
      
        var image = new Image();
        image.width = birdSize;
        image.height = birdSize;
        image.src = birdCanvas.toDataURL();
        return image;
      }
      
      // Custom function to create a rounded rectangle
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.arcTo(x + width, y, x + width, y + radius, radius);
        this.lineTo(x + width, y + height - radius);
        this.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        this.lineTo(x + radius, y + height);
        this.arcTo(x, y + height, x, y + height - radius, radius);
        this.lineTo(x, y + radius);
        this.arcTo(x, y, x + radius, y, radius);
        this.closePath();
        return this;
      };
      
      
      
      

  
  
      //========================================================================
      //========================:: TUBES ::==================================
      //========================================================================
  
      var tubeGapHeight = 230; // Adjust as needed
      var tubesGapWidth;
      var tubes;
      var tubeWidth = 100; // Adjust as needed
      var minTubeHeight = 50; // Adjust as needed
      
      function updateTubes() {
        for (var i = 0; i < tubes.length; i++) {
          updateTube(tubes[i]);
        }
      }
      
      function updateTube(tube) {
        tube.topRect.x -= scrollSpeed;
        tube.bottomRect.x = tube.topRect.x;
        if (tube.topRect.x <= -tubeWidth) {
          tube.topRect.x = tube.bottomRect.x = canvas.width;
          renderTube(tube);
        }
      }
      
      function renderTubes() {
        for (var i = 0; i < tubes.length; i++) {
          context.drawImage(tubes[i].canvas, tubes[i].bottomRect.x, 0);
        }
      }
      
      function createTubes() {
        tubes = [];
        var totalTubes = 2;
        tubesGapWidth = Math.floor(canvas.width / totalTubes);
      
        for (var i = 0; i < totalTubes; i++) {
          tubes[i] = {};
          tubes[i].canvas = document.createElement("canvas");
          tubes[i].topRect = new Sakri.Geom.Rectangle(canvas.width + (i * tubesGapWidth));
          tubes[i].bottomRect = new Sakri.Geom.Rectangle(canvas.width + (i * tubesGapWidth));
          renderTube(tubes[i]);
        }
        currentTube = tubes[0];
      }
      
      var tubeOutlineColor = "#87CEEB";
      var tubeMainColor = "#1874CD";
      var tubeCapHeight = 40;
      
      function renderTube(tube) {
        tube.canvas.width = tubeWidth;
        tube.canvas.height = groundGraphicRect.y;
      
        tube.bottomRect.width = tube.topRect.width = tubeWidth;
        tube.topRect.y = 0;
        tube.topRect.height = minTubeHeight + Math.round(Math.random() * (groundGraphicRect.y - tubeGapHeight - minTubeHeight * 2));
      
        tube.bottomRect.y = tube.topRect.getBottom() + tubeGapHeight;
        tube.bottomRect.height = groundGraphicRect.y - tube.bottomRect.y - 1; // minus one for stroke
      
        var tubeContext = tube.canvas.getContext("2d");
        tubeContext.lineWidth = 2;
      
        // Render top tube
        renderTubeElement(tubeContext, 3, 0, tubeWidth - 6, tube.topRect.height);
        renderTubeElement(tubeContext, 1, tube.topRect.getBottom() - tubeCapHeight, tubeWidth - 2, tubeCapHeight);
      
        // Render bottom tube
        renderTubeElement(tubeContext, 3, tube.bottomRect.y, tubeWidth - 6, tube.bottomRect.height);
        renderTubeElement(tubeContext, 1, tube.bottomRect.y, tubeWidth - 2, tubeCapHeight);
      }
      
      function renderTubeElement(ctx, x, y, width, height) {
        // Gradient for tube colors
        var gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#98E4FF"); // Light blue
        gradient.addColorStop(1, "#687EFF"); // Dark blue
      
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, width, height);
      
        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, width, height);
      }
      
  
  
      //========================================================================
      //========================:: CITY BG ::==================================
      //========================================================================
  
      var cityGraphicCanvas;

      function createCityGraphic() {
          if (cityGraphicCanvas) {
              canvasContainer.removeChild(cityGraphicCanvas);
          }
          cityGraphicCanvas = document.createElement("canvas");
          cityGraphicCanvas.style.position = "absolute";
          cityGraphicCanvas.style.left = canvas.style.left;
          cityGraphicCanvas.style.top = canvas.style.top;
          cityGraphicCanvas.width = canvas.width;
          cityGraphicCanvas.height = canvas.height;
          var cgContext = cityGraphicCanvas.getContext("2d");
          var cityGraphicHeight = canvas.height * 0.25;
      
          // Fill with a gradient sky
          var gradient = cgContext.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, "#71c5cf"); // Light blue
          gradient.addColorStop(1, "#4f6f9e"); // Dark blue
          cgContext.fillStyle = gradient;
          cgContext.fillRect(0, 0, canvas.width, canvas.height);
      
          cgContext.fillStyle = "#e9fad8";
      
          cgContext.save();
          cgContext.translate(0, groundGraphicRect.y - cityGraphicHeight);
      
          // Clouds
          var maxCloudRadius = cityGraphicHeight * 0.4;
          var minCloudRadius = maxCloudRadius * 0.5;
          cgContext.fillStyle = "rgba(255, 255, 255, 0.8)"; // Semi-transparent white for clouds
      
          for (iterator = 0; iterator < canvas.width; iterator += minCloudRadius * 2) {
              cgContext.beginPath();
              cgContext.arc(iterator, maxCloudRadius, Sakri.MathUtil.getRandomNumberInRange(minCloudRadius, maxCloudRadius), 0, Sakri.MathUtil.PI2);
              cgContext.closePath();
              cgContext.fill();
          }
      
          cgContext.fillRect(0, maxCloudRadius, canvas.width, cityGraphicHeight);
      
          // Trees
          var maxTreeRadius = cityGraphicHeight * 0.3;
          var minTreeRadius = maxTreeRadius * 0.5;
          var radius;
          var strokeStartRadian = Math.PI + Math.PI / 4;
          var strokeEndRadian = Math.PI + Math.PI / 4;
          cgContext.fillStyle = "#81e18b";
          cgContext.strokeStyle = "#72c887";
          for (iterator = 0; iterator < canvas.width; iterator += minTreeRadius * 2) {
              cgContext.beginPath();
              radius = Sakri.MathUtil.getRandomNumberInRange(minTreeRadius, maxTreeRadius);
              cgContext.arc(iterator, cityGraphicHeight, radius, 0, Sakri.MathUtil.PI2);
              cgContext.closePath();
              cgContext.fill();
      
              cgContext.beginPath();
              cgContext.arc(iterator, cityGraphicHeight, radius, strokeStartRadian, strokeEndRadian);
              cgContext.closePath();
              cgContext.stroke();
          }
      
          cgContext.restore();
      
          // Sand
          var sandGradient = cgContext.createLinearGradient(0, groundGraphicRect.y, 0, canvas.height);
          sandGradient.addColorStop(0, "#dbb768"); // Light sand color
          sandGradient.addColorStop(1, "#bf935a"); // Dark sand color
          cgContext.fillStyle = sandGradient;
          cgContext.fillRect(0, groundGraphicRect.y, canvas.width, canvas.height);
      
          canvasContainer.insertBefore(cityGraphicCanvas, canvasContainer.firstChild);
      }

      
  
      //========================================================================
      //========================:: GROUND ::==================================
      //========================================================================
  
      var groundX = 0;

      function renderGroundPattern() {
          context.drawImage(groundPatternCanvas, groundX, groundGraphicRect.y);
          groundX -= scrollSpeed;
          groundX %= 16;
      }
      
      // Colors
      var groundLightGreen = "#97e556";
      var groundDarkGreen = "#73be29";
      var groundDarkerGreen = "#4b7e19";
      var groundShadow = "#d1a649";
      var groundBorder = "#4c3f48";
      var sand = "#dcd795";
      var groundGraphicRect = new Sakri.Geom.Rectangle();
      var groundPatternCanvas;
      
      function createGroundPattern() {
          groundGraphicRect.y = canvas.height * 0.85;
          if (!groundPatternCanvas) {
              groundPatternCanvas = document.createElement("canvas");
          }
          groundPatternCanvas.width = 16;
          groundPatternCanvas.height = 16;
          var groundContext = groundPatternCanvas.getContext("2d");
      
          // Fill with a light green color
          groundContext.fillStyle = groundLightGreen;
          groundContext.fillRect(0, 0, 16, 16);
      
          // Diagonal graphic
          groundContext.fillStyle = groundDarkGreen;
          groundContext.beginPath();
          groundContext.moveTo(8, 3);
          groundContext.lineTo(16, 3);
          groundContext.lineTo(8, 13);
          groundContext.lineTo(0, 13);
          groundContext.closePath();
          groundContext.fill();
      
          // Top border
          groundContext.fillStyle = groundBorder;
          groundContext.globalAlpha = 0.2;
          groundContext.fillRect(0, 0, 16, 1);
          groundContext.globalAlpha = 1;
          groundContext.fillRect(0, 1, 16, 1);
          groundContext.globalAlpha = 0.6;
          groundContext.fillRect(0, 2, 16, 1);
      
          // Highlight
          groundContext.fillStyle = "#FFFFFF";
          groundContext.globalAlpha = 0.3;
          groundContext.fillRect(0, 3, 16, 2);
      
          // Bottom border
          groundContext.fillStyle = groundDarkerGreen;
          groundContext.globalAlpha = 0.3;
          groundContext.fillRect(0, 10, 16, 3);
          groundContext.globalAlpha = 1;
          groundContext.fillRect(0, 11, 16, 1);
      
          // Shadow
          groundContext.fillStyle = groundShadow;
          groundContext.fillRect(0, 13, 16, 3);
      
          var groundPattern = context.createPattern(groundPatternCanvas, "repeat-x");
      
          groundPatternCanvas.width = canvas.width + 16;
          groundPatternCanvas.height = 16;
      
          groundContext.fillStyle = groundPattern;
          groundContext.fillRect(0, 0, groundPatternCanvas.width, 16);
      }
      
      function clearTimeoutsAndIntervals() {
          gameState = -1;
      }
      
      var maxCharacters = 10;
      
      function changeText() {
          var textInput = document.getElementById("textInput");
          if (textInput.value && textInput.text != "") {
              if (textInput.value.length > maxCharacters) {
                  alert("Sorry, there is space for only " + maxCharacters + " characters. Try a shorter name.");
                  return;
              }
              if (textInput.value.indexOf(" ") > -1) {
                  alert("Sorry, no support for spaces at the moment :(");
                  return;
              }
              word = textInput.value;
              clearTimeoutsAndIntervals();
              animating = false;
              setTimeout(commitResize, 100);
          }
      }
      