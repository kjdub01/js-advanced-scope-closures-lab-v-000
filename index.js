function produceDrivingRange(blockRange) {
  return function(start, end)  {
    let travelRange = start - end;
    if (start - end <= blockRange)
      return `${travelRange}`;
      
    else {
      return ``;
    }
    
  }
}

'within range by 4'

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