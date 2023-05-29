/** @format */

// ---- 1 ---- //
class Circle {
  constructor(x, y, radius, initials) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.initials = initials;
  }

  getCircleLength() {
    return 2 * Math.PI * this.radius;
  }

  static radius(radius) {
    return 2 * Math.PI * radius;
  }

  getObjCircle() {
    return new Circle(this.x, this.y, this.radius, this.initials);
  }

  static centerCircleRadius(x, y, radius) {
    return new Circle(x, y, radius);
  }

  point(xPoint, yPoint) {
    const pointCircle = Math.sqrt(Math.pow(xPoint - this.x, 2) + Math.pow(yPoint - this.y, 2));
    return pointCircle <= this.radius;
  }

  toString() {
    return `Circle: Center(${this.x}, ${this.y}), Radius: ${this.radius}, Initials: ${this.initials}`;
  }
}

let circle = new Circle(0, 0, 25);
const clonedCircle = circle.getCircleLength();
const circle2 = Circle.centerCircleRadius(2, 2, 3);

console.log(circle.getCircleLength()); // Виведе довжину кола для даного об'єкта
console.log(Circle.radius(7)); // Виведе довжину кола за заданим радіусом
console.log(clonedCircle.toString()); // Виведе інформацію про клонований об'єкт
console.log(circle2.point(2, 5)); // Перевірка попадання точки до кола
console.log(circle.toString()); // Перетворення поточного об'єкта на рядок

// ---- 2 ---- //
let mentor = {
  cours: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

function propsCount(currentObject) {
  let obj = 0;
  for (let key in currentObject) {
    if (currentObject.hasOwnProperty(key)) {
      obj++;
    }
    console.log(`${key}: ${currentObject[key]}`);
  }
  return obj;
}

console.log(propsCount(mentor));

// ---- 3 ---- //
