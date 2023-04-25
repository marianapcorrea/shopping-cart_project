export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (item) => {
  // try {
  if (!item) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const data = await response.json();
  return data.results;
/*   } catch (error) {
    console.log(error.message);
    throw error.message;
    // return error.message;
  } */
};
