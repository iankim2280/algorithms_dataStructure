class Tutorial {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

let firstone = new Tutorial("Ian", "Kim", 1991);

console.log(firstone);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
let smallRectangle = new Rectangle(10, 20);
let largeRectangle = new Rectangle(100, 200);

console.log(smallRectangle.area);
