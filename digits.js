function digPow(n, p) {
    let number = n.toString()
    let index = 0;
    let sum = 0;
    while (index < number.length) {
        sum += Math.pow(number[index], p + index);
        index++;
    };
    return (sum % number == 0 ? sum / number : -1);

};

console.log(digPow(46288, 3));

// Nessa opção fazemos uso do Array.from() que abre uma string em uma array, permitindo o uso posterior de métodos de iteração de arrays que são mais comuns e práticos na linguagem JS. 


// let number = n.toString();
// let sum = 0;
// Array.from(number).forEach((digit) => {
//     sum += Math.pow(digit, p++);
// });
// return (sum % number ? -1 : sum / number);