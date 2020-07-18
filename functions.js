//you dont need to define the keyword function in es6
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };

  bicycle.setGear(3);
  console.log(bicycle.gear);
  