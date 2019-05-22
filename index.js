function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock)  {
    let start = parseInt( startBlock );
    let end = parseInt( endBlock );
    let travelRange = Math.abs( end - start );
    let difference = blockRange - travelRange;
    if (difference > 0 )
      return `within range by ${difference}`;
      
    else {
      return `${Math.abs(difference)} blocks out of range`;
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