function greet(name){
    return `Hello ${name}!`;
}
console.log(greet("Developer"));
const multiply = function(a,b,c)
{
    return (a*b*c);
}
console.log(multiply(2,3,4));
//Arrow function
const add = (x,y) => x+y;
console.log(add(3,8));
function sayHi(){
    console.log("Hi there!");
}
sayHi();
function calculateArea(length, width){
    return length*width;
}
console.log(calculateArea(4,20));
function greet(name= "Guest"){
    return`Welcome ${name}`;
}
//console.log(greet());
console.log(greet("John"));
function square(num){
    return num*num;
}
let result=square(7);
console.log(result);
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
}, 2000);
function isEven(number){
    if(number%2==0){
        return `${number} is even`;
    }
    else{
        return `${number} is odd`; 
    }
}
console.log(isEven(4));
let car= {
    brand: "Toyota",
    model: "Carolla",
    year: 2011,
    start: function(){
        console.log("The car is starting");
    }
};
console.log(car.brand);//Access property
car.start();//Call method
let person=new Object();
person.name = "John";
person.age = 30;
person.greet=function(){
    console.log("Hello " + this.name);
};
person.greet();
function Person(name, age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log("Hi, I'm "+this.name);
    };
}
let alice=new Person("Aina",17);
alice.greet();
class Animal{
    constructor(type, sound){
        this.type=type;
        this.sound=sound;
    }
    makeSound(){
        console.log(this.sound);
    }
}
let dog=new Animal("Dog", "Woof");
dog.makeSound();