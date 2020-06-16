//1. Create a Class called WhyClass.  This class should have one property, and two methods.
//The property is called "purpose", and stores a string.
//This string should clearly explain why classes are used in Object Oriented Programming.
//The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.
//The second method is called pieces().  This 2nd method should print out the various parts that are essential to
//building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this
//file is run.

//your code here....

class WhyClass {
  constructor(purpose, aspects) {
    (this.purpose = purpose), (this.aspects = aspects);
  }
  explain() {
    return `${this.purpose}`;
  }
  pieces() {
    return `${this.aspects}`;
  }
}

const why = new WhyClass(
  "Exercise 1a: Classes allow us to encapsulate related properties and methods; use abstraction to hide details that users dont need to see; and use inheritance and polymporphism to reuse code and prevent duplication"
);

console.log(why.explain());

const parts = new WhyClass(
  "Exercise 1b:",
  "The parts of a class are constructors, properties, methods, this, and new."
);

console.log(parts.pieces());

/*2. You are exploring the rainforests of the Amazon.  
You have observed many different types of wildlife on your excursion.  
To jog your memory, some different types of wildlife that you observed are found in the following 
URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  
Feel free to use other resources online if you wish.

jaguars, 
harpy eagles
pink river dolphins
sloths
black spider monkeys
poison dart frogs.*/

/*Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...
class Animals {
  constructor(name) {
    this.name = name;
  }
}

class Jaguar extends Animals {
  constructor(name, spots, longTail, claws) {
    super(name);
    (this.spots = spots), (this.longTail = longTail), (this.claws = claws);
  }
  runs() {
    return `This ${this.name} can really run!`;
  }
  twists() {
    return `This ${this.name} can twist like a cat!`;
  }
}

const jag = new Jaguar("Jaguar", "100 spots", "very long tail", "sharp claws");
console.log(jag);
console.log(jag.runs());
console.log(jag.twists());

//second animal
class Harpies extends Animals {
  constructor(name, wings, beaks, talons) {
    super(name);
    (this.wings = wings), (this.beaks = beaks), (this.talons = talons);
  }
  screeches() {
    return `This ${this.name} can really screech!`;
  }
  mesmerizes() {
    return `This ${this.name} can mezmerize even the strongest animal.`;
  }
}

const harp = new Harpies("Harpy", "giant wings", "long beak", "sharp ");
console.log(harp);
console.log(harp.screeches());
console.log(harp.mesmerizes());

//third animal
class PinkRiverDolphin extends Animals {
  constructor(name, color, nose, fins) {
    super(name);
    (this.color = color), (this.nose = nose), (this.fins = fins);
  }
  swims() {
    return `This ${this.name} can swim with the best of them`;
  }
  plays() {
    return `This ${this.name} loves to play all day.`;
  }
}

const dolph = new PinkRiverDolphin(
  "Pink River Dolphin",
  "pink color",
  "long nose",
  "dorsal fin"
);
console.log(dolph);
console.log(dolph.swims());
console.log(dolph.plays());

//fourth animal

class Sloth extends Animals {
  constructor(name, fur, arms, legs) {
    super(name);
    (this.fur = fur), (this.arms = arms), (this.legs = legs);
  }
  eats() {
    return `This ${this.name} eats leaves and other tree things.`;
  }
  sleeps() {
    return `This ${this.name} loves sleep in the trees.`;
  }
}

const slow = new Sloth(
  "Sloth",
  "long stringy fur",
  "long hairy arms",
  "long hairy legs"
);
console.log(slow);
console.log(slow.eats());
console.log(slow.sleeps());

// fifth animal
class BlackSpiderMonkey extends Animals {
  constructor(name, eyes, thumbs, ears) {
    super(name);
    (this.eyes = eyes), (this.thumbs = thumbs), (this.ears = ears);
  }
  swings() {
    return `This ${this.name} swings from the tree branches.`;
  }
  hangs() {
    return `This ${this.name} loves to hang upside down in the branches.`;
  }
}

const spidey = new BlackSpiderMonkey(
  "Black Spider Monkey",
  "pretty eyes",
  "opposable thumb",
  "big ears"
);
console.log(spidey);
console.log(spidey.swings());
console.log(spidey.hangs());

//sixth animal
class PoisonDartFrog extends Animals {
  constructor(name, skin, tongue, feet) {
    super(name);
    (this.skin = skin), (this.tongue = tongue), (this.feet = feet);
  }
  ribbets() {
    return `This ${this.name} ribbets when sitting on a lily pad.`;
  }
  poisons() {
    return `This ${this.name} will poison you if you touch it.`;
  }
}

const frog = new PoisonDartFrog(
  "Poison Dart Frog",
  "slimy skin",
  "long tongue",
  "webbed feet"
);
console.log(frog);
console.log(frog.ribbets());
console.log(frog.poisons());

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  constructor(name, sides, base, halfBase, height, length, width, radius) {
    (this.name = name),
      (this.sides = sides),
      (this.base = base),
      (this.halfBase = halfBase),
      (this.height = height),
      (this.length = length),
      (this.width = width),
      (this.radius = radius),
      (this.calcArea = function () {}),
      (this.calcPerimeter = function () {});
    this.calcCircumference = function () {};
  }
}

const triangle = new Shape("triangle", 7, 4, 2, 6.71, null, null, null);

(triangle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${
      triangle.height * this.halfBase
    }`
  );
}),
  (triangle.calcPerimeter = function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + this.sides + this.sides
      }`
    );
  });

triangle.base = triangle.base; //base is the 1st side in the triangle.sides array, which is 4, but for calc of height I need half of that.

//bonus calc height - the square root of A2 * B2 = C2 where A2 is base, B2 is height and C2 is hypotenuse)

triangle.height = function () {
  console.log(
    "Triangle height is " +
      Math.sqrt(Math.pow(this.sides, 2) - Math.pow(this.halfBase, 2))
  );
};

console.log(triangle.height());
console.log(triangle);
console.log(triangle.calcArea());
console.log(triangle.calcPerimeter());

const rectangle = new Shape("rectangle", null, null, null, null, 2, 5, null);

(rectangle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${this.length * this.width}`
  );
}),
  (rectangle.calcPerimeter = function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  }),
  console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = new Shape("circle", null, null, null, null, null, null, 5);

(circle.calcArea = function () {
  console.log(
    `${this.name}'s area is calculated to be : ${(
      Math.PI *
      this.radius ** 2
    ).toFixed(2)}`
  );
}),
  (circle.calcCircumference = function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  });

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises: I opted for the second one for the bonus.

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  
Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  
Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, 
you will also obtain the bonus for this exercise.  
The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  
Because there is only 1 known earth, we don't want multiple instances of earth.  
Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

//My code here...

class Earth {
  name;
  planetNum;
  constructor(name, num) {
    if (new.target === Earth) {
      throw new TypeError("Cannot construct Earth instances directly");
    }
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth("earth", 3);
console.log(earth);
