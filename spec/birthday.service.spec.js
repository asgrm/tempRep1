const BirthdayService = require('../src/birthday.service');

describe('BirthdayService', () => {
  const bs = new BirthdayService();
  const inRange = 100;
  const outsideRange = 200;
  const timestamp = 162703722;

  beforeEach(() => {
    spyOn(console, 'log').and.callThrough();
  })

  it('exists', () => {
    expect(bs).toBeTruthy();
  });

  it('calculates days to birthday', () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return bs.howLongToMyBirthday(tomorrow).then(res => {
      expect(res).toBe(1);
    });
  });
  
  it('throws error if called without arguments', () => {
    expect(() => bs.howLongToMyBirthday()).toThrowError('Wrong argument!');
  });

  it('throws error if argument is neither date of timestamp', () => {
    expect(() => bs.howLongToMyBirthday('Fri, 23 Jul 2021 09:06:28 GMT')).toThrowError('Wrong argument!');   
  });

  it('does not throw error if argument is date', () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() - outsideRange);
    expect(() => bs.howLongToMyBirthday(targetDate)).not.toThrowError('Wrong argument!');   
  });

  it('does not throw error if argument is timestamp', () => {
    expect(() => bs.howLongToMyBirthday(timestamp)).not.toThrowError('Wrong argument!');   
  });

  it('logs birthday if passed argument is a current date', () => {
    return bs.howLongToMyBirthday(new Date()).then(() => {
      expect(console.log).toHaveBeenCalledOnceWith('Hooray!!! It is today!');
    });
  });

  it('logs that birthday is coming within 6 month range (100 days)', () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + inRange);
    return bs.howLongToMyBirthday(targetDate).then(() => {
      expect(console.log).toHaveBeenCalledOnceWith(`Soon...Please, wait just 100 day/days`);
    });
  });

  it('does not log that birthday is coming outside 6 month range (200 days)', () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + outsideRange);
    return bs.howLongToMyBirthday(targetDate).then(() => {
      expect(console.log).not.toHaveBeenCalledWith(`Soon...Please, wait just 200 day/days`);
    });
  });

  it('logs that birthday was within 6 month range (100 days)', () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() - inRange);
    return bs.howLongToMyBirthday(targetDate).then(() => {
      expect(console.log).toHaveBeenCalledOnceWith(`Oh, you have celebrated it 100 day/s ago, don't you remember?`);
    });
  });

  it('does not log that birthday was outside 6 month range (200 days)', () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() - outsideRange);
    return bs.howLongToMyBirthday(targetDate).then(() => {
      expect(console.log).not.toHaveBeenCalledWith(`Oh, you have celebrated it 200 day/s ago, don't you remember?`);
    });
  });

});

