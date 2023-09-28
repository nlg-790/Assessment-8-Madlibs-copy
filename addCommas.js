function addCommas(number) {
    if (isNaN(number)) {
      return 'Invalid Number';
    }
  
    const numberString = number.toString();
    const parts = numberString.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    const formattedNumber = parts.length === 2 ? `${integerPart}.${parts[1]}` : integerPart;
  
    return formattedNumber;
  }
  
  module.exports = addCommas;
  