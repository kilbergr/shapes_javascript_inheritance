var Shape = require("./shape");

function Square(color, sideLength) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;

}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;


Square.prototype.area = function(sideLength){
	return(this.sideLength*this.sideLength);
};

Square.prototype.perimeter = function(sideLength){
	return(this.sideLength*4);
};

Square.prototype.toString = function(){
	return("[Shape sides:" + this.sides + ", color:" + this.color +" ]");
};

Square.prototype.draw = function(){
	return("______" +"\n" +"|    |"+"\n"+"|    |" + "\n" + "______"
);
}

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
