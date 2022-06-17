function outlier(array) {
    let index = 0;
    let even = 0;
    let odd = 0;
    let elementOdd;
    let elementEven;

    while (index < array.length) {
        let mod = array[index] % 2;
        if (array[index] < 0) {
            mod = (array[index] * (-1)) % 2;
        };
        if (mod == 1) {
            elementOdd = array[index];
            odd++;
        } else {
            elementEven = array[index];
            even++;
        };
        if (even > 1 && odd == 1) {
            return (elementOdd);
        } else if (even == 1 && odd > 1) {
            return (elementEven);
        };
        index++;
    };
};

let test = [2, 4, 0, 100, 4, -11, 2602, 36];
console.log(outlier(test));


// Embora a minha solução seja muito voltada para o raciocínio em C, ela é mis eficiente do que o opção bem JS abaixo. Porque ela não necessariamente percorre a array toda. Assim que, ou logo depois que, ela passa pelo elemento outlier, ela já retorna e encerra a tarefa. A opção abaixo percorre a array inteira duas vezes para retornar uma resposta. 

// let odd = array.filter(elemento => elemento % 2 != 0);
// let even = array.filter(elemento => elemento % 2 == 0);
// return (odd.length == 1 ? odd[0] : even[0]);
 