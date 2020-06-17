/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
    Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...*/
    //doing this with weakmap as well as with # because # doesn't seem to work due to it being so new.
//first
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

//second
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

//here is exercise 1 with # used for private variable - which does not seem to work yet, but I believe I have the syntax correct

class Books {
  constructor(#author, #publisher) {
    (this.#author = #author),
    (this.#publisher = #publisher)
  }

  getAuthor() {
    return this.#author
  }
  getPublisher() {
    return this.#publisher
  }
}

const b = new Books("King", "Penguin");
console.log(b.getAuthor());
console.log(b.getPublisher());

//Second

class Author {
  constructor(#name, #books) {
    (this.#name = #name),
    (this.#books = #books);
  }

  getName() {
    return this.#name;
  }
  getBooks() {
    return this.#books;
  }
}
const a = new Author("Steven", "The Stand");
console.log(a.getName);
console.log(a.getBooks);

//third

class Publisher {
  constructor(#authors, #books) {
    (this.#authors = #authors),
    (this.#books = #books)
  }

  getAuthors() {
    return this.#authors;
  }
  getBooks() {
    return this.#books;
  }
}
const p = new Publisher("Cornwell and Patterson", "Caught and Cross");
console.log(p.getAuthors);
console.log(p.getBooks);

//fourth

class Review {
  constructor(#rating, #user) {
    (this.#rating = #rating),
    (this.#user = #user)
  }

  getRating() {
    return this.#rating;
  }
  getUser() {
    return this.#user
  }
}

const r = new Review("five stars", "Norita");
console.log(r.getRating);
console.log(r.getUser);

/*2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  
    Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  
    Create at least 3 different companies that are children of the Umbrella Organization.  
    (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  
    It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. 
    Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 
    1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  
    The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...*/

    class Textron {
      constructor(name) {
        if (new.target === Textron) {
          throw new TypeError("Cannot construct Textron instances directly");
        }
        this.name = name;
      }
    }
    //const t = new Textron("Textron"); - this produces the error message
    console.log("Parent Company is " + Textron.name);
    
    class Bell extends Textron {
      constructor(name, employees, buildings, cages) {
        super(name);
        (this.employees = employees),
          (this.buildings = buildings),
          (this.cages = cages);
      }
      buildCopters() {
        console.log(`We use our ${this.buildings} to manufacture helicopters.`);
      }
      testRotors() {
        console.log(`We use our ${this.cages} to test rotors.`);
      }
    }
    
    const bell = new Bell("Bell", 7050, "hangars", "blade cages");
    console.log(
      `${bell.name} is a subsidiary of Textron and has ${bell.employees} employees.`
    );
    bell.buildCopters();
    bell.testRotors();
    
    class BellMfgOne extends Bell {
      constructor(name, location, equipment, assets) {
        super(name);
        (this.location = location),
          (this.equipment = equipment),
          (this.assets = assets);
      }
      createOrders() {
        console.log(`This plant uses ${this.equipment} to generate work orders.`);
      }
      createAssets() {
        console.log(`This plant closes work orders and creates ${this.assets}`);
      }
    }
    const bso = new BellMfgOne(
      "Bell Manufacturing Site One",
      "Hurst, TX",
      "computers",
      "rotors"
    );
    console.log(`${bso.name} is located in ${bso.location}.`);
    bso.createOrders();
    bso.createAssets();
    
    class BellMfgTwo extends Bell {
      constructor(name, location, supplies, vehicles) {
        super(name);
        (this.location = location),
          (this.supplies = supplies),
          (this.vehicles = vehicles);
      }
      packSupplies() {
        console.log(`This plant packs ${this.supplies} to send to other plants.`);
      }
      shipSupplies() {
        console.log(`This plant ships supplies via ${this.vehicles}.`);
      }
    }
    const bst = new BellMfgTwo(
      "Bell Manufacturing Site Two",
      "Fort Worth, TX",
      "computers",
      "trucks"
    );
    console.log(`${bst.name} is located in ${bst.location}.`);
    bst.packSupplies();
    bst.shipSupplies();
    
    class BellMfgThree extends Bell {
      constructor(name, location, stations, storage) {
        super(name);
        (this.location = location),
          (this.stations = stations),
          (this.storage = storage);
      }
      workStations() {
        console.log(
          `Each part goes through the ${this.stations} before shipment to customer.`
        );
      }
      partStorage() {
        console.log(`Extra parts end up in the ${this.storage} location.`);
      }
    }
    const bsth = new BellMfgThree(
      "Bell Manufacturing Site Three",
      "Grand Prairie, TX",
      "inpsection station",
      "warehouse overflow"
    );
    console.log(`${bsth.name} is located in ${bsth.location}.`);
    bsth.workStations();
    bsth.partStorage();
    
    class Cessna extends Textron {
      constructor(name, employees, products, customers) {
        super(name);
        (this.name = name),
          (this.employees = employees),
          (this.products = products),
          (this.customers = customers);
      }
      buildPlanes() {
        console.log(`${this.name} builds a variety of ${this.products}.`);
      }
      pleaseCustomers() {
        console.log(
          `We take orders from ${this.customers} for different airplanes.`
        );
      }
    }
    const cessna = new Cessna("Cessna", 8500, "pleasure aircraft", "anyone");
    console.log(
      `${cessna.name} is a subsidiary of Textron and has ${cessna.employees} employees.`
    );
    cessna.buildPlanes();
    cessna.pleaseCustomers();
    
    class CessnaWichita extends Cessna {
      constructor(name, location, measure, build) {
        super(name);
        (this.location = location), (this.measure = measure), (this.build = build);
      }
      measureSpeed() {
        console.log(`We measure ${this.measure} for the wings.`);
      }
      engineBuild() {
        console.log(`Building ${this.build} for the aircraft.`);
      }
    }
    
    const cessnaW = new CessnaWichita(
      "Cessna Wichita",
      "Wichita, KS",
      "wind speed",
      "Lycoming engines"
    );
    console.log(`${cessnaW.name} is located in ${cessnaW.location}.`);
    cessnaW.measureSpeed();
    cessnaW.engineBuild();
    
    class CessnaIndependence extends Cessna {
      constructor(name, location, computers, desks) {
        super(name);
        (this.location = location),
          (this.computers = computers),
          (this.desks = desks);
      }
      sendOrders() {
        console.log(`Using ${this.computers} to send orders to be built.`);
      }
      completeOrders() {
        console.log(`Using the ${this.desks} to process finished orders.`);
      }
    }
    const cessnaI = new CessnaIndependence(
      "Cessna Independence",
      "Independence, KS",
      "stationary desktops",
      "orders desk"
    );
    console.log(`${cessnaI.name} is located in ${cessnaI.location}.`);
    cessnaI.sendOrders();
    cessnaI.completeOrders();
    
    class CessnaColumbus extends Cessna {
      constructor(name, location, service, stock) {
        super(name);
        (this.location = location), (this.service = service), (this.stock = stock);
      }
      customerService() {
        console.log(`Providing ${this.service} to online customers.`);
      }
      stockSale() {
        console.log(`Selling ${this.stock} to our customers.`);
      }
    }
    const cessnaC = new CessnaColumbus(
      "Cessna Columbus",
      "Columbus, GA",
      "self-help kiosks",
      "OEM and aftermarket stock"
    );
    console.log(`${cessnaC.name} is located in ${cessnaC.location}.`);
    cessnaC.customerService();
    cessnaC.stockSale();
    
    class EZGO extends Textron {
      constructor(name, employees, marketing, testing) {
        super(name);
        (this.name = name),
          (this.employees = employees),
          (this.marketing = marketing),
          (this.testing = testing);
      }
      onlineMarketing() {
        console.log(
          `${this.name} is always demonstrating new products via ${this.marketing} techniques.`
        );
      }
      customerTesting() {
        console.log(
          `Sending samples out to prospective customers as a form of ${this.testing}`
        );
      }
    }
    const ez = new EZGO("E-Z-Go", 35000, "online", "product testing");
    console.log(
      `${ez.name} is a subsidiary of Textron and has ${ez.employees} employees.`
    );
    ez.onlineMarketing();
    ez.customerTesting();
    
    class EZGOSales extends EZGO {
      constructor(name, location, stores, courses) {
        super(name);
        (this.location = location),
          (this.stores = stores),
          (this.courses = courses);
      }
      storeStock() {
        console.log(`Bring necessary stock to our ${this.stores}.`);
      }
      advertiseCourses() {
        console.log(`Renewing ads at our ${this.courses} locations.`);
      }
    }
    const ezs = new EZGOSales(
      "E-Z-GO Sales",
      "Garland, TX",
      "franchisee locations",
      "golf course"
    );
    console.log(`${ezs.name} is located in ${ezs.location}.`);
    ezs.storeStock();
    ezs.advertiseCourses();
    
    class EZGOService extends EZGO {
      constructor(name, location, tags, tools) {
        super(name);
        (this.location = location), (this.tags = tags), (this.tools = tools);
      }
      tagStock() {
        console.log(`This location uses ${this.tags} to track of service items.`);
      }
      useTools() {
        console.log(
          `This location uses a variety of ${this.tools} to work on broken golf carts.`
        );
      }
    }
    const ezsv = new EZGOService(
      "E-Z-GO Service",
      "Hillsboro, TX",
      "Tyvek tags",
      "power tools"
    );
    console.log(`${ezsv.name} is located in ${ezsv.location}.`);
    ezsv.tagStock();
    ezsv.useTools();
    
    class EZGOWarr extends EZGO {
      constructor(name, location, cabinets, files) {
        super(name);
        (this.location = location),
          (this.cabinets = cabinets),
          (this.files = files);
      }
      shufflePaper() {
        console.log(`Track Warranties using ${this.cabinets}.`);
      }
      fileWarranties() {
        console.log(
          `Each customer warranty is stored in the appropriate ${this.files}.`
        );
      }
    }
    const ezw = new EZGOWarr(
      "E-Z-GO Warranties",
      "Plano,TX",
      "Customer cabinets",
      "service file"
    );
    console.log(`${ezw.name} is located in ${ezw.location}.`);
    ezw.shufflePaper();
    ezw.fileWarranties();
  
    //Employee class and instances of employees

    class Employee {
      constructor(name, company, title, salary, item1, item2) {
        (this.name = name),
          (this.company = company),
          (this.title = title),
          (this.salary = salary),
          (this.item1 = item1),
          (this.item2 = item2);
      }
      aboutMe() {
        console.log(
          `My name is ${this.name} and I work at ${this.company}. My title is ${this.title} and my annual salary is ${this.salary}.`
        );
      }
      myDuties() {
        console.log(
          `As ${this.title} my job is to ${this.item1} and ${this.item2}.`
        );
      }
    }
    
    const ceo = new Employee(
      "Mary Higgens",
      "Sears",
      "CEO",
      "$400,000",
      "run the company",
      "report to shareholders"
    );
    console.log(ceo);
    ceo.aboutMe();
    ceo.myDuties();
    
    const manager = new Employee(
      "Joy Fendway",
      "JC Penney",
      "Manager",
      "$200,000",
      "oversee employees",
      "hire new employees"
    );
    console.log(manager);
    manager.aboutMe();
    manager.myDuties();
    
    const secretary = new Employee(
      "Cal French",
      "Tommie Hilfiger",
      "Secretary",
      "$65,000",
      "take care of paperwork",
      "answer calls"
    );
    console.log(secretary);
    secretary.aboutMe();
    secretary.myDuties();
    
    const engineer1 = new Employee(
      "John Joseph",
      "L-3 Communications",
      "Engineer1",
      "$120,000",
      "design new products",
      "generate specifications"
    );
    console.log(engineer1);
    engineer1.aboutMe();
    engineer1.myDuties();
    
    const engineer2 = new Employee(
      "Calley Nolary",
      "L-3 Communications",
      "Engineer2",
      "$110,000",
      "generate blueprints",
      "create bill of materials"
    );
    console.log(engineer2);
    engineer2.aboutMe();
    engineer2.myDuties();
    
    const financeCPA = new Employee(
      "Jane Shumway",
      "Consumers Electronics",
      "Finance CPA",
      "$175,000",
      "track sales and expenses",
      "do month end close"
    );
    console.log(financeCPA);
    financeCPA.aboutMe();
    financeCPA.myDuties();
    
    const janitor = new Employee(
      "Hank Miller",
      "Delphi",
      "Janitor",
      "$65,000",
      "daily cleaning",
      "taking out trash"
    );
    console.log(janitor);
    janitor.aboutMe();
    janitor.myDuties();
    
    const marketer = new Employee(
      "Colleen Avery",
      "Schwans Foods",
      "Marketer",
      "$92,000",
      "creating clever ads",
      "getting tv and radio spots"
    );
    console.log(marketer);
    marketer.aboutMe();
    marketer.myDuties();
    
    const hr = new Employee(
      "Linda Barbara",
      "Church of Christ",
      "HR",
      "$75,000",
      "reviewing resumes",
      "doing hiring interviews"
    );
    console.log(hr);
    hr.aboutMe();
    hr.myDuties();
    
    const lawyer = new Employee(
      "Desiree Avery",
      "Kautex",
      "lawyer",
      "$250,000",
      "filing briefs",
      "tracking company communications"
    );
    console.log(lawyer);
    lawyer.aboutMe();
    lawyer.myDuties();


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
class Bookstore {
  constructor(titles, types) {
    (this.titles = titles), (this.types = types);
  }
}

class Authors extends Bookstore {
  constructor(titles, types, authors) {
    super(titles, types);
    this.authors = authors;
  }
}
class Publishers extends Authors {
  constructor(titles, types, authors, publishers) {
    super(titles, types, authors);
    this.publishers = publishers;
  }
}

const thomasNelson1 = new Publishers(
  "Hurricane Season",
  "Fiction",
  "Lauren K. Denten",
  "Thomas Nelson"
);
console.log(thomasNelson1);

const thomasNelson2 = new Publishers(
  "Captivating",
  "Non-Fiction",
  "John Eldredge",
  "Thomas Nelson"
);
console.log(thomasNelson2);

const thomasNelson3 = new Publishers(
  "Daniel",
  "Non-Fiction",
  "John MacArthur",
  "Thomas Nelson"
);
console.log(thomasNelson3);

const penguin1 = new Publishers(
  "Pilgrim's Progress",
  "Fiction",
  "John Bunyon",
  "Thomas Nelson"
);
console.log(penguin1);

const penguin2 = new Publishers(
  "The Bone Collector",
  "Fiction",
  "Jeffrey Deaver and David Macallum",
  "Penguin"
);
console.log(penguin2);

const penguin3 = new Publishers(
  "The Handmaid's Tale",
  "Fiction",
  "Margaret Atwood and Claire Daines",
  "Penguin Random House"
);
console.log(penguin3);

class Reviews extends Publishers {
  constructor(titles, types, authors, publishers, reviews) {
    super(titles, types, authors, publishers);
    this.reviews = reviews;
  }
}

const book1 = new Reviews(
  "Not the Perfect Book",
  "Non-Fiction",
  "JW Rucker",
  "JW Rucker JR",
  "Five Stars"
);
console.log(book1);
const book2 = new Reviews(
  "The Hideaway",
  "Fiction",
  "Lauren K. Denton",
  "Thomas Nelson",
  "four and a half stars"
);
console.log(book2);
const book3 = new Reviews(
  "The Woman I was Before",
  "Fiction",
  "Kerry Fisher",
  "Bookoutoure",
  "No reviews yet"
);
console.log(book3);
const book4 = new Reviews(
  "Send Down the Rain",
  "Non-Fiction",
  "Charles Martin",
  "Thomas Nelson",
  "No Reviews yet"
);
console.log(book4);
const book5 = new Reviews(
  "The Knowledge of the Holy",
  "Non-Fiction",
  "A.W. Tozer",
  "Reading Essentials",
  "Five Stars all the way"
);
console.log(book5);
const book6 = new Reviews(
  "The Life We Bury",
  "Fiction",
  "Allen Eskins",
  "Tantor Audio",
  "Five stars"
);
console.log(book6);