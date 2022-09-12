require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se fetchProducts é uma função' , () => {
    expect(typeof(fetchProducts)).toBe('function')
  });

  test('Verifica se com parametro a função é chamada', async () => {
   await fetchProducts('computador')
   expect(fetch).toHaveBeenCalledTimes(1)
  });

  test('Verifica se ao chamar a função com o argumento "computador" utiliza a url https://api.mercadolibre.com/sites/MLB/search?q=computador ', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url)
  });

  test('Verifica se o retorno é um objeto', async () => {
    const func = await fetchProducts('computador')
    expect(func).toEqual(computadorSearch)
  });

  test('Verifica se retorna um erro ao ser chamada sem argumento', async () => {
    const algo = await fetchProducts()
    expect(algo).toEqual(new Error('You must provide an url'))
  });
});
