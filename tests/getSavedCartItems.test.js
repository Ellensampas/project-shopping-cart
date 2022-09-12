const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Verifica se ao executar getSavedCartItems, localStorage.getItem é chamado', () => {
    getSavedCartItems('MLB2197308438')
    expect(localStorage.setItem).toHaveBeenCalled()
  })
  test('Verifica se ao executar getSavedCartItems, localStorage.getItem é chamado com o "cartItems" como parametro', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem')
  });
});
