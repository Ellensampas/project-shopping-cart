const fetchItem = (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
