var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(color, length, height) {
  Shape.call(this, 4, color);
  this.length = length;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
	return(this.length*this.height);
}

Rectangle.prototype.perimeter = function(){
	return((this.length*2)+(this.height*2));
}

Rectangle.prototype.toString = function(){
	return("[Shape sides:" + this.sides + ", color:" + this.color +" ]");
};

Rectangle.prototype.draw = function(){
	return("____" + "\n" + "|  |" + "\n" + "|  |" + "\n" + "|  |" + "\n" + "|  |" + "\n"
+ "|  |" + "\n" + "|  |" + "\n" + "____");
};

module.exports = Rectangle;
