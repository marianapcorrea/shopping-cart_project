export const getAddress = async (cep) => {
  try {
    const promises = [
      fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
      fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
    ];

    const response = await Promise.any(promises);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input').value;
  console.log(cepInput);
  const cartAdress = document.querySelector('.cart__address');
  const cep = await getAddress(cepInput);

  const awesomeAPI = `${cep.address} - ${cep.district} - ${cep.city} - ${cep.state}`;
  const brasilAPI = `${cep.street} - ${cep.neighborhood} - ${cep.city} - ${cep.state}`;
  if (cep.address_type) {
    console.log(awesomeAPI);
    cartAdress.innerHTML = awesomeAPI;
  } else if (cep.neighborhood) {
    console.log(brasilAPI);
    cartAdress.innerHTML = brasilAPI;
  } else { cartAdress.innerHTML = 'CEP não encontrado'; }
};
