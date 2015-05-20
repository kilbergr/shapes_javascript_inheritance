var Square = require("../src/square");

var square;

describe("Square", function() {

  beforeEach(function() {
    square = new Square("red", 2);
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("ToString", function(){
    it("should be string version of square", function(){
      expect(square.toString()).toEqual("[Shape sides:4, color:red ]");
    });
  });

  describe("Set Color", function(){
    it("should return square color in RGB", function(){
      expect(square.getRGB()).toEqual("rgb(255,0,0)");
    });
  });

  describe("Draw", function(){
    it("should draw the square", function(){
      expect(square.draw()).toEqual("______" + "\n" +"|    |"+"\n"+"|    |" + "\n" + "______");
    });
  });
  // Write more specs!!
});
