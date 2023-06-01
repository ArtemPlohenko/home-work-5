/** @format */

// ---- 1 ---- //
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  static getLengthFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  static createCircle(x, y, radius) {
    return new Circle({ x, y }, radius);
  }

  checkPointInside(point) {
    const distance = Math.sqrt(Math.pow(point.x - this.center.x, 2) + Math.pow(point.y - this.center.y, 2));
    return distance <= this.radius;
  }

  toString() {
    return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
  }
}

const circle = new Circle({ x: 1, y: 1 }, 2);
console.log(String(circle));

const circle2 = Circle.createCircle(10, 15, 34);
console.log(String(circle2));

const circle3 = new Circle({ x: 1, y: 1 }, 5);
console.log(circle3.getLength().toFixed(1));

console.log(Circle.getLengthFromRadius(10).toFixed(1));

const circle4 = new Circle({ x: 2, y: 2 }, 20);
const pointInside = { x: 3, y: 3 };
console.log(circle4.checkPointInside(pointInside));

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
    // console.log(`${key}: ${currentObject[key]}`);
  }
  return obj;
}

console.log(propsCount(mentor));

// ---- 3 ---- //
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return this.name + " " + midleName + " " + this.surname;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course;
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

// ---- 4 ---- //
class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.inkLevel > 0) {
        if (text[i] !== " ") {
          printedText += text[i];
          this.inkLevel -= 0.5;
        } else {
          printedText += " ";
        }
      } else {
        break;
      }
    }

    console.log(`Printed text: ${printedText}`);
    console.log(`Ink level: ${this.inkLevel}%`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    if (this.inkLevel + inkAmount <= 100) {
      this.inkLevel += inkAmount;
      console.log(`Marker refilled. Ink level: ${this.inkLevel}%`);
    } else {
      console.log("Cannot refill. Ink level exceeds 100%.");
    }
  }
}

// Приклад
const simpleMarker = new Marker("blue", 50);
simpleMarker.print("Simple Marker!");
const refillableMarker = new RefillableMarker("green", 70);
refillableMarker.print("This is a refillable marker.");

// ---- 5 ---- //
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    // console.log(this);
    return this.dayRate * this.workingDays;
  }
}
