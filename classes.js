class AlexandrStrahov {
    constructor(age) {
      this.age = age;
      this.car = 'BMW';
    }
   
    niceToMeetYou() {
      let name = 'Alex';  
      console.log(`${name} ${this.age} ${this.car}`);
    }
  
  }
  let myPerson = new AlexandrStrahov('30').niceToMeetYou();