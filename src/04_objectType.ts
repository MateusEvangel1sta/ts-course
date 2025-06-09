const objectA: {
  // KeyA cannot be changed
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'A',
  keyB: 'B',
};

// objectA.keyA = 'Outro valor';
objectA.keyD = 25364;

console.log(objectA);
