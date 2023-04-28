const totalPrice = document.querySelector('.total-price');

const checkValue = () => {
  const arr = [];

  document.querySelectorAll('.cart .product__price__value')
    .forEach((value) => arr.push(Number(value.innerHTML)));
  return arr.reduce((acc, newValue) => acc + newValue, 0).toFixed(2);
};

export const addNewValue = (e) => {
  const newValue = e.target.previousSibling.lastChild.innerHTML;
  const revisedValue = Number(totalPrice.innerHTML) + Number(newValue);
  totalPrice.innerHTML = revisedValue.toFixed(2);
};

export const removeValue = (e) => {
  const targetValue = e.target.previousSibling.lastChild.lastChild.innerHTML;
  const revisedValue = Number(totalPrice.innerHTML) - Number(targetValue);
  totalPrice.innerHTML = revisedValue.toFixed(2);
};

export const recoverValueOnLoad = () => {
  totalPrice.innerHTML = checkValue();
};
