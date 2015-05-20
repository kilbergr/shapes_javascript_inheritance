var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle("green", 4, 6);
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("To String", function(){
    it("should return string version of rectangle", function(){
      expect(rectangle.toString()).toEqual("[Shape sides:4, color:green ]")
    });
  });


  describe("Draw", function(){
    it("should draw the rectangle", function(){
      expect(rectangle.draw()).toEqual("____" + "\n" + "|  |" + "\n" + "|  |" + "\n" + "|  |" + "\n" + "|  |" + "\n"
+ "|  |" + "\n" + "|  |" + "\n" + "____");
    });
  });


  describe("Set Color", function(){
    it("should return rectangle color in RGB", function(){
      expect(rectangle.getRGB()).toEqual("rgb(0,255,0)");
    });
  });

});
