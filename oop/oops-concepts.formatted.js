// ═══════════════════════════════════════════
// 📘 oops-concepts
// ═══════════════════════════════════════════

// 🔹 Javascript mein opp k 4 pillars hote hein:
// 🔹 1- Abstraction
// 🔹 2- Encapsulation
// 🔹 3- Inheritance
// 🔹 4- polymorphisim

// 🔹 class mein 2 elements hote hein aik properties like variables jin mein data store karte hein or 2nd methods means functions.

// 🔹 class mein define methods us class ko define karte hein k wo class kya kya working kar sakti hai cuz wo working us k methods mein define hoti hai

// 🔹 jab bhi class mein define method ko kahin use karna hota hai to us class ko pehle object mein convert karna hota hai


// 🔹 define class
// 💻
class hello {
    // 🔹 method function
    message() {
        console.log("hello world")
    }
}

// 🔹 converted into object
// 💻
let a = new hello();

// 🔹 now call the define method that we define in previous class:

// 💻
a.message();


// 🔹 type of methods
// 🔹 1- constructor
// 🔹 2- prototype
// 🔹 3- static

// 🔹 constructor method:

// 🔹 jaise hi hum kisi bhi class ka object banate hein or us class mein yai function define ho to yai function auto call hojata hai

// 💻
class hello {
    constructor() {
        console.log("hello")
    }
}

let b = new hello();


// 🔹 prototype method:
// 💻
class hello {
    message() {
        console.log("hello world")
    }
}
let c = new hello();
c.message();

// 🔹 static method:

// 🔹 is mein class k object banane ki need nahi hoti isko direct call karlete hein

// 💻
class hello {
    static message() {
        console.log("hello world")
    }
}


// 🔹 example 1:

// 💻
class hello {
    constructor() {
        let name;
        console.log("constructor function hello")
    }
    message() {
        console.log("hello " + this.name)
    }
}
let d = new hello();
d.name = "zain";
d.message();

// 🔹 example 2:

// 💻
class hello {
    constructor(name,age) {
        this.studentName = name;
        this.studentAge = age;
        console.log("constructor function invoked");
    }
    message() {
        console.log(`hello ${this.studentName} your age is ${this.studentAge}`);
    }

    static message() {
        console.log("static function invoked")
    }
}

// 🔹 constructor method call
// 💻
let e = new hello("zain",25);
let f = new hello("shoaib",20);

// 🔹 prototype method call
// 💻
e.message();
f.message();

// 🔹 static method call
// 💻
hello.message();



// 🔹 frontend master:

// 🔹 creating the class

// 💻
class superHero {
    heroName = 'zain';
    getName() {
        return this.heroName;
    }
}

const detail = new superHero();

console.log(detail.heroName);

console.log(detail.getName());


