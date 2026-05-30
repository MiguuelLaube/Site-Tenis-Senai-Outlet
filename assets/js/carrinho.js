// ============================================
// carrinho.js — Lógica do Carrinho de Compras
// ============================================

let itensCarrinho = []; // Nossa lista de produtos vazia

/**
 * Adiciona um produto ao carrinho
 * @param {string} nome - Nome do produto
 * @param {number} preco - Preço do produto
 * @param {string} imagem - Caminho da imagem do produto
 */
function adicionarAoCarrinho(nome, preco, imagem) {
    // 1. Adiciona o objeto do tênis na nossa lista
    itensCarrinho.push({ nome, preco, imagem });

    // 2. Atualiza o número no ícone
    document.getElementById('cart-count').innerText = itensCarrinho.length;

    // 3. Renderiza (desenha) a lista atualizada dentro do carrinho
    atualizarVisualizacaoCarrinho();

    // 4. Exibe o toast com transição suave
    const toast = document.getElementById('toast-carrinho');
    if (toast) {
        toast.innerText = `"${nome}" adicionado à sua coleção!`;
        toast.style.display = 'block';
        toast.style.opacity = '0';
        
        // Pequeno delay para forçar o navegador a processar a opacidade inicial
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 50);

        // Limpa timers anteriores se o usuário clicar rápido
        if (window.toastTimeout) {
            clearTimeout(window.toastTimeout);
            clearTimeout(window.toastHideTimeout);
        }

        window.toastTimeout = setTimeout(() => {
            toast.style.opacity = '0';
            window.toastHideTimeout = setTimeout(() => {
                toast.style.display = 'none';
            }, 500); // Tempo correspondente à transição CSS
        }, 2500);
    }
}

/**
 * Atualiza a visualização da lista de itens do carrinho
 */
function atualizarVisualizacaoCarrinho() {
    const listaHtml = document.getElementById('itens-lista');
    const totalHtml = document.getElementById('total-carrinho');
    let total = 0;

    listaHtml.innerHTML = ""; // Limpa a lista para desenhar do zero

    itensCarrinho.forEach((item) => {
        total += item.preco;
        listaHtml.innerHTML += `
            <div class="item-no-carrinho">
                <img src="${item.imagem}" alt="${item.nome}">
                <div>
                    <p><strong>${item.nome}</strong></p>
                    <p>R$ ${item.preco}</p>
                </div>
            </div>
        `;
    });

    totalHtml.innerText = `R$ ${total.toFixed(2)}`;
}

/**
 * Abre e fecha o painel lateral do carrinho
 */
function toggleCarrinho() {
    const modal = document.getElementById('carrinho-lateral');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}
