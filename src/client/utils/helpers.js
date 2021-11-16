const getFormattedPrice = ({ currency, amount }) => {
  const currencySymbol = currency === 'ARS' ? '$' : 'U$D';
  const formattedAmount = Math.trunc(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${currencySymbol} ${formattedAmount}`;
};

const getCondition = (condition) => (condition === 'new' ? 'Nuevo' : 'Usado');

export { getFormattedPrice, getCondition };
