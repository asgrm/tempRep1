class BirthdayService {
  howLongToMyBirthday(date) {
    let bd = new Date(date);
    bd.setHours(0, 0, 0, 0);
    const today = new Date();
    const delay = 100;
    const hYear = 6;

    if (!(date instanceof Date) && !Number.isInteger(date)) {
      throw new Error('Wrong argument!')
    }

    return new Promise(resolve => {
      setTimeout(() => {
        const msInDay = 86400000;
        let res = Math.ceil((bd - today)/msInDay);
        if (res === 0) {
          this.congratulateWithBirthday()
        }
        let halfYearAgo = new Date(today);
        halfYearAgo.setMonth(halfYearAgo.getMonth() - hYear);
        let halfYearAhead = new Date(today);
        halfYearAhead.setMonth(halfYearAhead.getMonth() + hYear);
        const withinPosHalf = bd <= halfYearAhead;
        const withinNegHalf = bd >= halfYearAgo;    
    
        if (res > 0 && withinPosHalf || res < 0 && withinNegHalf) {
          this.notifyWaitingTime(res)
        }
        
        resolve(res);
      }, delay);
    });
  }
  
  congratulateWithBirthday() {
    console.log('Hooray!!! It is today!');
  }
  
  notifyWaitingTime(waitingTime) {
    waitingTime > 0 ?
    console.log(`Soon...Please, wait just ${waitingTime} day/days`) :
    console.log(`Oh, you have celebrated it ${-waitingTime} day/s ago, don't you remember?`);
  }
}

module.exports = BirthdayService;