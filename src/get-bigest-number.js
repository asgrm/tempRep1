function getBigestNumber(...args) {
  for (const arg of args) {
    if (typeof arg !== 'number') {
      throw new Error('Wrong argument type');
    }
  }
  const minLen = 2;
  const maxLen = 10;

  if (args.length < minLen) {
    throw new Error('Not enough arguments');
  }
  
  if (args.length > maxLen) {
    throw new Error('Too many arguments');
  }
  
  return Math.max(...args);
}

module.exports = getBigestNumber;