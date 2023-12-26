let animal = { 
    eats : true,
    walk(){
        if(!this.isSleeping){
           return "It was walking right now!!";
        }
    },
    sleep(){
        this.isSleeping = true;
    }
};

let rabbit = {
    name : "bunny",
    __proto__ : animal
};

let lion = {
    name : "Rocky",
    __proto__ : animal
}
  
rabbit.sleep();


console.log(rabbit.isSleeping); //true


const a = lion.walk();
console.log(a); //It was walking right now!!
