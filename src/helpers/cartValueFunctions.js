const updateSavedValue = (value) => {
  localStorage.setItem('value', JSON.stringify(value));
};

const getSavedValue = () => {
  const price = localStorage.getItem('value');
  return price ? JSON.parse(price) : 0;
};

export const recoverValueOnLoad = () => {
  document.querySelector('.total-price').innerHTML = getSavedValue();
};

export const addNewValue = (e) => {
  const newValue = e.target.previousSibling.lastChild.innerHTML;
  const totalPrice = document.querySelector('.total-price');
  const revisedValue = Number(totalPrice.innerHTML) + Number(newValue);
  updateSavedValue(revisedValue);
  totalPrice.innerHTML = revisedValue.toFixed(2);
};

export const removeValue = (id) => {
  const targetValue = id;
  // e.target.previousSibling.lastChild.innerHTML;
  console.log(targetValue);
};
