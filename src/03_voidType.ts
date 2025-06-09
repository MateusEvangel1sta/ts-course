function noReturn(...args: string[]): void {
  console.log(args);
}

noReturn('Luiz', 'adulto', 'programador');

const person = {
  name: 'Luiz',
  surname: 'Miranda',
  showName(): void {
    console.log(`${this.name} ${this.surname}`);
  },
};

person.showName();

export { person };
