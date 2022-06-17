
function binaryAddition(a, b){
    let sum = Number(a) + Number(b);
    let result = sum.toString(2);
    return(result);
};

console.log(binaryAddition(1000, 1500));