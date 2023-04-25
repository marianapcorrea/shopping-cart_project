import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
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

const populateProductSection = async (product) => {
  const result = await fetchProductsList(product);
  result.map((item) => products.appendChild(createProductElement(item)));
  removeLoadingText();
};

window.onload = () => {
  addLoadingText();
  populateProductSection('computador');
  document.querySelector('.cep-button').addEventListener('click', searchCep);
};
