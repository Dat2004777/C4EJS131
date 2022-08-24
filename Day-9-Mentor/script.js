// HW1
let numbers = [5, 1, 4, 2, 8]; 

function sortNumbers(numbers) {

   return  numbers.sort((a, b) => {
            return a > b ? 1 : -1;
        });
}

console.log(sortNumbers(numbers));

// HW2
let max_numbers = 100;

console.log(1 + "\n" + 2);

function isPrime(max_numbers) {
    for (let i = 2; i < max_numbers / 2; i++) {
        if (max_numbers % i === 0) return false;
    }
    return true;
}

getPrime();

function getPrime() {
    for (let i = 3; i < max_numbers; i++) {
        if (isPrime(i)) console.log(i);
    }
}


