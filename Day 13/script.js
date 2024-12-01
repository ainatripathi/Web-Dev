

let result;
let a=prompt("Enter first number");
let operate=prompt("Enter operation e.g., +,-,*,/");
let b=prompt("Enter second number");
switch(operate){
    case "+":
        result=a+b;
        console.log("Addition is ", result);
        break;
        case "-":
            result=a-b;
            console.log("Subtraction is ", result);
            break;
            case "*":
                result=a*b;
                console.log("Multiplication is ", result);
                break;
                case "/":
                    if(b==0){
                        console.log("Cannot be divided by zero");
                    }
                    else{
                        result=a/b;
                        console.log("Division is ", result);
                    }
}
