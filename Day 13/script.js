
let x=10;
let y=7;
console.log(x&y);
console.log(x|y);
console.log(x^y);

let a=10, b=4;
if(a>b)
    console.log(`${a} is greater.`);
else
console.log(`${b} is greater.`);

let a1=15, b1=20, c1=11, big;
if(a1>b1){
    if(a1>c1){
        big=a1;
    }
    else{
        big=c1;
    }
}
else{
    if(b1>c1){
        big=b1;
    }
    else{
        big=c1;
    }
}
console.log(`Largest number is ${big}`);

let m1=90, m2=70, m3=85, per;
per=(m1+m2+m3)/3;
if(per>=95)
    console.log("HONOURS");
else if(per>=60)
    console.log("FIRST");
else if(per>=50)
    console.log("SECOND");
else if(per>=40)
    console.log("THIRD");
else
console.log("FAIL");


let result;
let n1=prompt("Enter first number");
let operate=prompt("Enter operation e.g., +,-,*,/");
let n2=prompt("Enter second number");
switch(operate){
    case "+":
        result=n1*1+n2*1;
        console.log("Addition is ", result);
        break;
        case "-":
            result=n1-n2;
            console.log("Subtraction is ", result);
            break;
            case "*":
                result=n1*n2;
                console.log("Multiplication is ", result);
                break;
                case "/":
                    if(b==0){
                        console.log("Cannot be divided by zero");
                    }
                    else{
                        result=n1/n2;
                        console.log("Division is ", result);
                    }
                    break;
                    default:
                        console.log("Invalid choice.")
}