import { getSavedCartIDs } from './cartFunctions';
import { fetchProduct } from './fetchFunctions';

const totalPriceEl = document.querySelector('.total-price');

const recoverProductsValues = async () => Promise.all(getSavedCartIDs()
  .map(async (id) => fetchProduct(id)));

const sumValues = async () => {
  const result = await recoverProductsValues();
  totalPriceEl.innerHTML = result.reduce((acc, { price }) => acc + Number(price), 0);
};

export default sumValues;
