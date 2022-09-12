require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
test('Verifica se fetchItem é uma função' , () => {
  expect(typeof (fetchItem)).toBe('function')
})
test('Verifica se com parametro a função é chamada', async () => {
 await fetchItem('MLB1615760527')
  expect(fetch).toHaveBeenCalledTimes(1)
 });

 test('Verifica se ao chamar a função com o argumento "MLB1615760527" utiliza a url', async () => {
   const url = 'https://api.mercadolibre.com/items/MLB1615760527'
   await fetchItem('MLB1615760527')
   expect(fetch).toHaveBeenCalledWith(url)
 });

 test('Verifica se o retorno é um objeto', async () => {
   const func = await fetchItem('MLB1615760527')
   expect(func).toEqual(item)
 });

 test('Verifica se retorna um erro ao ser chamada sem argumento', async () => {
   const algo = await fetchItem()
   expect(algo).toEqual(new Error('You must provide an url'))
 });
});
