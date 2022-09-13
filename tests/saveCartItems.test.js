const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Verifica se ao receber um argumento localStorage.setItem é chamado', () => {
    saveCartItems('MLB2197308438')
    expect(localStorage.setItem).toHaveBeenCalled()
  })
  test('Verifica se setItem foi chamado corretamente com os parametros passados', () => {
    saveCartItems('MLB2197308438');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'MLB2197308438')
  });
});
