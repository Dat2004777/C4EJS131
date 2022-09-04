// HW1
let user = {
    name: "Dat",
    age: 18,
    appearence: {
        hairColor: "black",
        skinColor: "yellow",
        height: 1750,
        weight: 67,
    }
}

function getKeys (object, results = []) {
    let keys = results;
    for (let key in object) {
        keys.push(key);
        if (typeof object[key] === "object") {
            getKeys(object[key], keys);
        } 
    }

    return keys;
}

console.log("keys: ", getKeys(user));

// HW2

let arr = [21, 4, 5, -1];

function insertElement(arr, index, element) {
    arr.splice(index, 0, element);
    return arr;
}

console.log(insertElement(arr, 3, 99));