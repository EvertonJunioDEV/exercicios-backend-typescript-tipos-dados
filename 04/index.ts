const prod = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const notaFiscal = (produto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const listaProduto: string[] = [];

  for (let i = 0; i <= produto.qtd; i++)
    listaProduto.push(
      `"${produto.lote}-${produto.lote}-${i.toString().padStart(3, "0")}"`
    );
  return listaProduto;
};

console.log(notaFiscal(prod));
