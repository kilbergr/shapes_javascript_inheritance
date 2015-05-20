var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {

  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

describe("Perimeter", function(){
	it("should be 0 for this abstract shape", function(){
    expect(shape.perimeter()).toEqual(0);
  });
});

describe("To String", function(){
  it("should return shape size and color", function(){
      expect(shape.toString()).toEqual("[Shape sides:1, color:red ]")
    });
});

describe("Draw", function(){
  it("should draw shape", function(){
  expect(shape.draw()).toEqual("A shape with 1 sides");
  });
});

describe("Set color", function(){
  it("should set the shape's color", function(){
     expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
  });
});
