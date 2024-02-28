import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof (fetchProduct)).toBe('function');
  });
  it('fetch é chamado ao executar fetchProduct', () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('O retorno de "fetchProduct(computador)" === product', () => {
    expect(fetchProduct('MLB1405519561')).resolves.toBe(product);
  });
  it('Chamar fetchProduct() retorna erro:Termo de busca não informado', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});
