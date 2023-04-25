import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof (fetchProductsList)).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('O retorno de "fetchProductsList(computador)" === "computadorSearch"', () => {
    expect(fetchProductsList('computador')).resolves.toBe(computadorSearch);
  });

  it('Chamar fetchProductsList() retorna o erro: "Termo de busca não informado"', async () => {
    // const promise = ;
    await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
});
