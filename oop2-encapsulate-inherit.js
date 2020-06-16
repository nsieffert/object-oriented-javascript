/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
    Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...*/
//Books
const _author = new WeakMap();
const _publisher = new WeakMap();

class Books {
  constructor(author, publisher) {
    _author.set(this, author);
    _publisher.set(this, publisher);
  }

  get author() {
    return _author.get(this);
  }
  get publisher() {
    return _publisher.get(this);
  }
}

const b = new Books("King", "Penguin");
console.log(b.author);
console.log(b.publisher);

//Author
const _name = new WeakMap();
const _books = new WeakMap();

class Author {
  constructor(name, books) {
    _name.set(this, name);
    _books.set(this, books);
  }

  get name() {
    return _name.get(this);
  }
  get books() {
    return _books.get(this);
  }
}
const a = new Author("Steven", "The Stand");
console.log(a.name);
console.log(a.books);

//third
const _authors = new WeakMap();
class Publisher {
  constructor(authors, books) {
    _authors.set(this, authors);
    _books.set(this, books);
  }

  get authors() {
    return _authors.get(this);
  }
  get books() {
    return _books.get(this);
  }
}
const p = new Publisher("Cornwell and Patterson", "Caught and Cross");
console.log(p.authors);
console.log(p.books);
//fourth
const _rating = new WeakMap();
const _user = new WeakMap();
class Review {
  constructor(rating, user) {
    _rating.set(this, rating);
    _user.set(this, user);
  }

  get rating() {
    return _rating.get(this);
  }
  get user() {
    return _user.get(this);
  }
}

const r = new Review("five stars", "Norita");
console.log(r.rating);
console.log(r.user);

/*2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...




/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...




class Professional {
    constructor(name, field);
}