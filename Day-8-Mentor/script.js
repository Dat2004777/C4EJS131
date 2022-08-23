// HW1

let height = 5;
let write = "";
let result = "";

for (let i = 1; i <= height; i++) {
    write += "*";
    result += write + "\n";
}

console.log(result);

// HW2

let height2 = 5;
let write2 = "*";
let result2 = "";

for (let i = 0; i < height2; i++) {
    air = " ".repeat(height2 - i - 1);
    result2 += air + write2 + "\n";
    write2 += "**";
}

console.log(result2);
