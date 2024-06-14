const listaDeUsuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

function encontrar(
  array: { nome: string; idade: number; status: boolean }[],
  nome: string
): { nome: string; idade: number; status: boolean }[] {
  const result = array.filter((usuariosLista) => {
    return usuariosLista.nome.toLowerCase().includes(nome.toLowerCase());
  });
  return result;
}

console.log(encontrar(listaDeUsuarios, "jo"));
