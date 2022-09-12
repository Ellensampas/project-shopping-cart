const fetchItem = async (id) => {
  try {
    if (!id) throw new Error('You must provide an url');
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
fetchItem('MLB1615760527');