import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const populateProductSection = async (product) => {
  const result = await fetchProductsList(product);
  console.log(result);
  const products = document.querySelector('.products');
  // return createProductElement(result);
  result.map((item) => products.appendChild(createProductElement(item)));
};

populateProductSection('computador');
