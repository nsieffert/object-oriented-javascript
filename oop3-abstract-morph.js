/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. *
/*Find a way to prevent this class from being instantiated with an instance.  
In the Creature class, include two abstract methods.  move(), and act(). 
These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods 
if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. 
In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  
Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

//your code here...

class Creature {
  constructor(name, move, act) {
    if (new.target === Creature) {
      throw new TypeError("Cannot construct Creature instances directly");
    }
    this.name = name;
  }
  move() {
    if (new.target === move) {
      throw new TypeError(
        "Cannot invoke this method in the Creature Class directly."
      );
    }
  }
  act() {
    if (new.target === act) {
      throw new TypeError(
        "Cannot invoke this method in the Creature Class directly."
      );
    }
  }
}

class Human extends Creature {
  constructor(name, move, act, age, state, movement, character) {
    super(name, move, act);
    (this.age = age),
      (this.state = state),
      (this.movement = movement),
      (this.character = character);
  }
  move() {
    console.log(`${this.name} likes to move by ${this.movement}.`);
  }
  act() {
    console.log(`${this.name} acts a lot like ${this.character}.`);
  }
  verifying() {
    console.log(
      `${this.name} is ${this.age} years old and lives in ${this.state}.`
    );
  }
}

const human = new Human(
  "Kelly",
  null,
  null,
  "32",
  "Minnesota",
  "twisting her legs",
  "Mickey Mouse"
);
console.log(human);
human.move();
human.act();
human.verifying();

class Dinosaur extends Creature {
  constructor(name, move, act, arms, legs, food) {
    super(name, move, act);
    (this.arms = arms), (this.legs = legs), (this.food = food);
  }
  move() {
    console.log(`${this.name} likes to move her ${this.arms}.`);
  }
  act() {
    console.log(
      `${this.name} is acting like a butterfly when she ${this.legs}.`
    );
  }
  eating() {
    console.log(`${this.name} is chowing down on  ${this.food}.`);
  }
}
const dino = new Dinosaur(
  "Milly",
  null,
  null,
  "teeny-tiny arms",
  "dances",
  "butterflies"
);
console.log(dino);
dino.move();
dino.act();
dino.eating();

class Fish extends Creature {
  constructor(name, move, act, fins, teeth, way) {
    super(name, move, act);
    (this.fins = fins), (this.teeth = teeth), (this.way = way);
  }
  move() {
    console.log(
      `${this.name} likes to wiggle back and forth by moving ${this.fins}.`
    );
  }
  act() {
    console.log(`${this.name} is acting like a shark when he ${this.teeth}.`);
  }
  eating() {
    console.log(`${this.name} is swimming  ${this.way}.`);
  }
}

const fish = new Fish(
  "Fishy",
  null,
  null,
  "moving his fins side to side",
  "opens his mouth",
  "effortlessly"
);
console.log(fish);
fish.move();
fish.act();
fish.eating();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  
For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  code() {
    console.log(`${this.name} is coding.`);
  }

  repeat() {
    console.log(`${this.name} is repeating the above steps, yet another time.`);
  }

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work,
    //and the reasoning behind what you did.
    console.log(
      "I changed functions in the Person class to declarations so that the system would look at the fields in the subclasses first"
    );
  }
}

const person = new Person("Harriet");
person.eat();
person.sleep();
person.code();
person.repeat();
person.explain();

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }
  eat = () => {
    console.log(`${this.name} loves to teach before eating.`);
  };

  sleep = () => {
    console.log(`${this.name} sleeps after preparing the lesson plan.`);
  };

  code = () => {
    console.log(`${this.name} codes first, then teaches it the next day.`);
  };

  repeat = () => {
    console.log(`${this.name} teaches, codes, eats, sleeps, and repeats.`);
  };
  explain = () => {
    console.log(
      "the methods in the teacher class are arrow functions, which should override the function declarations in the parent class."
    );
  };
}

const teacher = new Teacher("Dr. Teacher");
teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();
teacher.explain();

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  constructor(name) {
    super(name);
    this.name = name;
  }
  eat = () => {
    console.log(`${this.name} studies, then eats.`);
  };

  sleep = () => {
    console.log(
      `${this.name} studies coding so much, that they dream about it in their sleep.`
    );
  };

  code = () => {
    console.log(
      `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru.`
    );
  };

  repeat = () => {
    console.log(
      `${this.name} keeps on studying, coding, eating and sleeping, and puts it all on repeat.`
    );
  };
  explain = () => {
    console.log(
      "the methods in the student class are arrow functions, which should override the function declarations in the Person class."
    );
  };
}

const student = new Student("Pupil student");
student.eat();
student.sleep();
student.code();
student.repeat();
student.explain();

//*****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  constructor(food1, food2, food3) {
    (this.food1 = food1), (this.food2 = food2), (this.food3 = food3);
  }
  prepare = () => {
    console.log(
      `The cook is cooking ${this.food1} ${this.food2} ${this.food3}`
    );
  };

  prepare() {
    console.log("The cook is cooking");
  }

  explain = () => {
    console.log(
      "Used the 'this' keyword; turned first prepare into an arrow function; turned second prepare into function declaration (so it will read the fields from the arrow function first). Moved parameters into the new constant."
    );
  };
}

const cook = new Cook("turkey", "salami", "pizza");

cook.prepare();

cook.explain();
