const getSleepHours = function(day) {
    if (day === "monday") {
      return 8;
    }  
    else {
      return 6;
    }
  }
  const getActualSleepHours = function() {
   let sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thurday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
    return sum; 
  }
  const getIdealSleepHours = () => {
    const idealHours = 6.5;
    return idealHours*7;
  }
  console.log(getIdealSleepHours());
  console.log(getActualSleepHours());
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amoun of sleep"
    }
    else if (actualSleepHours > idealSleepHours){
      return "You got " + (actualSleepHours - idealSleepHours) + " hour more than you needed this week."
    }
    else {
      return "You should get more sleep"
    }
  }
  console.log(calculateSleepDebt());
  