let vinhos = [];

function addVinho(nome, safra, tipo, preco) {
    
  let novoVinho = {
    nome: nome,
    safra: safra,
    tipo: tipo,
    preco: preco
  };

  vinhos.push(novoVinho);
}