
const botoes = document.querySelectorAll('.btn-comprar');


botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    alert('Camiseta adicionada ao carrinho!');
  });
});
