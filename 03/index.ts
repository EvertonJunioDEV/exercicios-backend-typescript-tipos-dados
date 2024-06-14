const tabuada = (listaNumeros: number[]): void => {
  for (let num of listaNumeros) {
    for (let i = 0; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);
    console.log("--------------\n");
  }
};

tabuada([1, 5, 2]);
