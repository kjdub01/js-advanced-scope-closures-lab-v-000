function produceDrivingRange(blockRange) {
  return function(start, end)  {
    if (start - end <= blockRange || end - start <= blockRange)
      return ``;
      
    
    else {
      
    }
    
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