//they help  obtain values from an object and set the value of a property within an object.
class Thermostat {
    constructor(farenheit){
    this.farenheit = farenheit;
    }
  get temperature() {
    return 5 / 9 * (this.farenheit - 32);
  } 
  set temperature(celcius) {
    this.farenheit = (celcius * 9) / 5 + 32;
  }
  }
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  