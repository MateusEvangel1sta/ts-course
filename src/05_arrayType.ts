// Array<t> - T[]
export function mult(...args: Array<number>): number {
  return args.reduce((acc, el) => acc * el, 1);
}

console.log(mult(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

export function stringConcat(...args: string[]): string {
  return args.reduce((acc, el) => acc + ' ' + el).toUpperCase();
}

console.log(stringConcat('Jesus', 'Canadá', 'carro', 'casamento', 'casa'));
