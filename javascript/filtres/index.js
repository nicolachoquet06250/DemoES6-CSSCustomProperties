let array1 = [5, 12, 8, 130, 44];

/* Filters */
// Array.find()

// 'found' get the first element from the array who is > 10
let found = array1.find(e => e > 10);

console.log(found);

// Array.from()

// from return an array with letters of word 'foo' => ['f', 'o', 'o']
let from = Array.from('foo');
console.log(from);

// from return an array with each elements multiplied by itself
from = Array.from([1, 2, 3], e => e + e);
console.log(from);

// from return an array with elements of the iterable object of 'Set' class
// work with all iterable objects
from = Array.from(new Set(["toto", "truc", "truc", "bidule"]));
console.log(from);

// Array.isArray()

// return true
console.log(Array.isArray(['coucou']));

// return false
console.log(Array.isArray('coucou'));

// Array.concat()
array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

// add 'array2' to 'array1'
console.log(array1.concat(array2));

// Array.entries()

array1 = ['a', 'b', 'c'];

let iterator1 = array1.entries();

// return an array with the key of first element and the value of first element
console.log(iterator1.next().value);

// return an array with the key of second element and the value of second element
console.log(iterator1.next().value);

// Array.every()

// test if all elements of array verify the condition into the callback
console.log([1, 30, 39, 29, 10, 13].every(e => e < 40));

// Array.filter()

// return another array with all elements of the original array who respects
// the condition into the callback.
console.log(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
    .filter(word => word.length > 6));

// Array.findIndex()

// return the index of the first element of the array who verify the condition into the callback.
console.log([5, 12, 8, 130, 44].findIndex(e => e > 13));

// Array.flat()

// return another array with all values of sub arrays and main array in one dimension.
console.log([1, 2, [3, 4, [5, 6]]].flat());

// Array.map() / Array.flatMap()

// return [["coucou"], ["comment"], [""], ["ça"], ["va"], ["?"]]
console.log(["Coucou comment", "", "ça va ?"].map(e => e.split(' ')));
// return ["coucou", "comment", "", "ça", "va", "?"]
console.log(["Coucou comment", "", "ça va ?"].flatMap(e => e.split(' ')));

// Array.forEach()

// write all element values and key in order of array.
[1, 2, 3, 4].forEach((e, k) => {
    console.log(e, k);
});

// Array.includes()

// test if the parameter value is into the array
// return true
console.log([1, 2, 3, 4].includes(3));
// return false
console.log([1, 2, 3, 4].includes(10));


// Array.includes()

// return the position of the element if the parameter value is into the array, else return -1
// return 2
console.log([1, 2, 3, 4].indexOf(3));
// return -1
console.log([1, 2, 3, 4].indexOf(10));

// Array.join()
// join all elements of the array in a string

// Array.keys()
// return an array with keys of all elements of main array

// Array.lastIndexOf()
// return the index of the last element with the value in parameter and -1 if not exist.

let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// return 3
console.log(animals.lastIndexOf('Dodo'));
// return 1
console.log(animals.lastIndexOf('Tiger'));
// return -1
console.log(animals.lastIndexOf('Toto'));

// Array.pop()
// delete the last element of the array and return element deleted

let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);

// Array.push()
// add an element to the array

plants.push('tomato');
console.log(plants);

// Array.reduce()
// Applies a function that is an "accumulator" and treats each value in a list
// (from left to right) to reduce it to a single value
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// return 10
console.log([1, 2, 3, 4].reduce(reducer));

// return 15
console.log([1, 2, 3, 4].reduce(reducer, 5));

// Array.reduceRight()
// same but from right to left

// Array.reverse()
// reverse elements of the array

let reversed = [0, 1, 2, 3, 4];
// return [4, 3, 2, 1, 0]
console.log(reversed);

// Array.shift()
// delete the first element of the array and return element deleted

array1 = [1, 2, 3];
// return 1;
console.log(array1.shift());
// return [2, 3]
console.log(array1);

// Array.slice()

animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// get another array with elements of the first array after index 2
// return ["camel", "duck", "elephant"]
console.log(animals.slice(2));
// get another array with elements of the first array between index 2 and index 4
// return ["camel", "duck"]
console.log(animals.slice(2, 4));
// get another array with elements of the first array between index 1 and index 5
// return ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(1, 5));

// Array.some()
// return true if at least 1 element in the array checks the condition of the callback,
// else return false.

console.log([1, 2, 3, 4, 5].some(e => e % 2 === 0));

// Array.toString()
// return all values of array converted in string separated with ","

// return I,am,Nicolas,Choquet
console.log(['I', 'am', 'Nicolas', 'Choquet'].toString());

// Array.unshift()
// add elements in head of array and return last element added
array1 = [3, 4, 5];
// return 2
console.log(array1.unshift(0, 1, 2));
// return [0, 1, 2, 3, 4, 5]
console.log(array1);

// Array.values()
// same of Array.keys() but with values


