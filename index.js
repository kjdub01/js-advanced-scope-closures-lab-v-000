function produceDrivingRange(range) {
  return function(start, end)  {
    return 
  }
}

function produceTipCalculator(tipPercentage) {
  return function (fare) {
    return fare * tipPercentage;
  }
}

function createDriver() {
  let driverID = 0;
  
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverID;
    }
  }
}