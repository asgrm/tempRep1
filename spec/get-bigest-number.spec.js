const getBigestNumber = require('../src/get-bigest-number');

describe('getBigestNumber', () => {
  const testArr = [1, 0, 3];
  const testArr2 = [1, 555];
  const longArr = Array.from({length: 11}, () => 1);
  const res1 = 3;
  const res2 = 555;

  it('returns bigest number', () => {
    expect(getBigestNumber(...testArr)).toBe(res1);
  });

  it('returns bigest number, prevent hardcoded result', () => {
    expect(getBigestNumber(...testArr2)).toBe(res2);
  });

  it('throws error if one of the arguments is not a number', () => {
    expect(() => getBigestNumber(1, '2')).toThrowError('Wrong argument type');
  });

  it('throws error if less than 1 argument passed', () => {
    expect(() => getBigestNumber(1)).toThrowError('Not enough arguments');
  });
  
  it('throws error if more than 10 arguments passed', () => {
    expect(() => getBigestNumber(...longArr)).toThrowError('Too many arguments');
  });
});