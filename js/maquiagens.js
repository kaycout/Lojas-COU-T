// Lista de produtos (pode vir de um banco de dados futuramente)
const produtos = [
  "Produto 1", "Produto 2", "Produto 3",
  "Produto 4", "Produto 5", "Produto 6",
  "Produto 7", "Produto 8", "Produto 9"
];

const produtosPorPagina = 3;
let paginaAtual = 1;

function mostrarProdutos(pagina) {
  const inicio = (pagina - 1) * produtosPorPagina;
  const fim = inicio + produtosPorPagina;
  const container = document.getElementById("lista-produtos");

  // Limpa antes de renderizar
  container.innerHTML = "";

  // Pega apenas os produtos da página
  const produtosPagina = produtos.slice(inicio, fim);

  produtosPagina.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.textContent = prod;
    container.appendChild(div);
  });

  // Atualiza botão ativo
  document.querySelectorAll(".pagination a").forEach((btn, i) => {
    btn.classList.toggle("active", i+1 === pagina);
  });
}

function mudarPagina(pagina) {
  paginaAtual = pagina;
  mostrarProdutos(pagina);
}

// Mostra a primeira página ao carregar
mostrarProdutos(paginaAtual);
