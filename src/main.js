import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');

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

const populateProductSection = async (product) => {
  try {
    const test = await fetchProduct('MLB1405519561');
    console.log(test);
    const result = await fetchProductsList(product);
    result.map((item) => products.appendChild(createProductElement(item)));
  } catch {
    createErrorElement();
  } finally {
    removeLoadingText();
  }
};

window.onload = () => {
  addLoadingText();
  populateProductSection('computer');
  document.querySelector('.cep-button').addEventListener('click', searchCep);
};
