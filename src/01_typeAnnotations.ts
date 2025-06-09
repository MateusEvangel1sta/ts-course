let otherName: string = 'Luiz';
let age: number = 18;
let adult: boolean = true;
let simb: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayNumbers: Array<number> = [10, 20, 30, 40, 50];
let arrayStrings: string[] = ['Bernardo', 'Otávio'];

// Objects
let person: { name: string; age: number; adult?: boolean } = {
  name: 'Luiz',
  age: 30,
  adult: true,
};

console.log(person.name);

// Function
function sum(x: number, y: number): number {
  return x + y;
}

let result = sum(2, 2);
console.log(result);

const multiplication: (x: number, y: number) => number = (x, y) => {
  return x * y;
};

console.log(multiplication(5, 5));
