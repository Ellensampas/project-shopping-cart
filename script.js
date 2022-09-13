// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const cap = document.querySelector('.cart__items');
 cap.innerHTML = getSavedCartItems();

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  // li.addEventListener('click', cartItemClickListener);
  return li;
};
const createItems = async () => {
 const sec = document.querySelector('.items');
 const chama = await fetchProducts('computador');
 const dat = await chama.results;
 dat.forEach((element) => {
  sec.appendChild(createProductItemElement(element));
 });
};

const somaTudo = () => {
  let somaTot = 0;
  const classePreco = document.querySelector('.total-price');
  Array.from(cap.children).forEach((pasy) => {
    const price = Number(pasy.innerText.split('$').pop());
    somaTot += price;
    classePreco.innerHTML = `$${somaTot}`;
  });
};  
// console.log(somaTudo());
const adiciona = async () => {
  await createItems();
  const but = document.querySelectorAll('.item__add');
  but.forEach((value) => value.addEventListener('click', async () => {
  const pai = value.parentElement;
  const idItem = pai.firstChild.innerText;
  const valuess = await fetchItem(idItem);
   cap.appendChild(createCartItemElement(valuess));
   await saveCartItems(cap.innerHTML);
    somaTudo();
  }));
};
  cap.addEventListener('click', (event) => {
    const evento = event.target;
    cap.removeChild(evento);
    somaTudo();
    saveCartItems(cap.innerHTML);
  });

  // const botaoLimpa = async () => {
  //   const daddy = document.getElementsByClassName('cart__items');
  //   const chil = document.querySelectorAll('.cart__item');
  //   const butt = document.getElementsByClassName('empty-cart');

  //   daddy.removeChild(chil);
  // };

window.onload = () => { adiciona(); };
