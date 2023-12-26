class Student {
    constructor(name,age,contact){
        this.name = name;
        this.age = age;
        this.contact = contact
    }
}

const student1 = new Student("Ayush Patel",19,6756785678);
const student2 = new Student("Sakshi Patel",17,3456238979);

console.log(student1.name + " , " + student2.name);



class Person {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const prsn1 = new Person("Dhruvi" , 2001);
const prsn2 = new Person("Ayush" , 2004);

console.log(`${prsn1.name} is ${prsn1.age()} years old `);


// Class inheritance

class Std {
    constructor(std){
        this.std = std;
    }
    current(){
        return "i am in " + this.std + "rd standard.";
    }
} 

class Student_info extends Std {
    constructor(nme,ag,std){
        super(std);
        this.name = nme;
        this.age = ag;

    }
    show(){
        return "My name is " + this.name + " and i am  " + this.age + " years old . " + this.current();
    }
}

let Student_intro = new Student_info("Dhruvi Patel", 8 , 3);
console.log(Student_intro.show());



//Getter Setter

class Name {
    constructor(person){
        this.person = person;
    }
    get pname(){
        return this.person;
    }
    set pname(x){
        this.person = x;
    }
}

const p1 = new Name("dhruvi");
console.log(p1.pname);
p1.pname = "Ankur";
console.log(p1.pname);


//Static method

class Intro {
    constructor(fname){
        this.fname = fname;
    }

    static call(x){
        return "hello! , " + x.fname;
    }
}

const p2 =  new Intro ("Dhruvi");
console.log(Intro.call(p2));