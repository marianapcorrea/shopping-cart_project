import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import sumValues from './helpers/cartValueFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

const addLoadingText = () => {
  const loading = document.createElement('p');
  loading.innerText = 'carregando...';
  loading.className = 'loading';
  products.appendChild(loading);
};

const removeLoadingText = () => document.querySelector('.loading').remove();

const createErrorElement = () => {
  const error = ('Algum erro ocorreu, recarregue a página e tente novamente');
  const errorEl = document.createElement('h3');
  errorEl.className = 'error';
  errorEl.innerText = error;
  products.appendChild((errorEl));
};

const populatesCart = async (targetId) => {
  const productData = await fetchProduct(targetId);
  const productElement = createCartProductElement(productData);
  cartProducts.appendChild(productElement);
  await sumValues();
};

const getTargetId = async (e) => {
  const targetId = e.target.parentNode.firstChild.innerHTML;
  saveCartID(targetId);
  populatesCart(targetId);
};

const startAddEvent = () => {
  document.querySelectorAll('.product__add')
    .forEach((addBtn) => {
      addBtn.addEventListener('click', getTargetId);
    });
  document.querySelectorAll('.product__price__value')
    .forEach(async (rmvBtn) => rmvBtn.addEventListener('click', await sumValues));
};

const populateProductSection = async (product) => {
  try {
    const result = await fetchProductsList(product);
    result.map((item) => products.appendChild(createProductElement(item)));
  } catch {
    createErrorElement();
  } finally {
    removeLoadingText();
    startAddEvent();
  }
};

const restoreCartData = () => getSavedCartIDs().forEach((id) => populatesCart(id));

console.log();
window.onload = () => {
  addLoadingText();
  populateProductSection('computer');
  restoreCartData();
  document.querySelector('.cep-button').addEventListener('click', searchCep);
};
