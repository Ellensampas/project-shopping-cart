const fetchProducts = async (param) => {
  try {
    if (!param) throw new Error('You must provide an url');

    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(url);
    const resultado = await response.json();
    return resultado;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
