function calculate(number1, number2, opr) {
    let ans;

    switch(opr) {
        case "add": {
            ans = number1 + number2;
            break;
        }
        case "sub": {
            ans = number1 - number2;
            break;
        }
        case "mul": {
            ans = number1 * number2;
            break;
        }
        case "div": {
            if(number2===0){
                console.log("cant divide by zero")
            }
            else{
                ans=number1/number2;
            }
            break;
        }
        case "mod": { 
            ans = number1 % number2;
            break;
        }
        default:{
            console.log("invalid choice");
        }
    }
    return ans;
}


x=calculate(2,3,"add");
console.log(x);


x=calculate(2,3,"div");
console.log(x);

x=calculate(2,0,"div");
console.log(x);

x=calculate(2,3,"mul");
console.log(x);

x=calculate(325,200,"mod");
console.log(x);

x=calculate(325,200,"square");
console.log(x);