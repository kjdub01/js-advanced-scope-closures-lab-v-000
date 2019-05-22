function produceDrivingRange(blockRange) {
  return function(start, end)  {
    let travelRange = ;
    if (start - end <= blockRange)
      return `within range by ${travelRange}`;
      
    else {
      return `${travelRange} blocks out of range`;
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