function equalChecker(value1, value2, checkType = false, errMsg = false){
  if(typeof value1 == 'object' && value1 != null && typeof value2 == 'object' && value2 != null){
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);                                      
    const values1 = Object.values(value1);
    const values2 = Object.values(value2);

    if( keys1.length !== keys2.length ){
      return errMsg ? [false, `${value1} and ${value2} : different lengths`] : false;
    };

    for(i in keys1){
      if(keys1[i] != keys2[i]){
        return errMsg ? [false, `${keys1[i]} and ${keys2[i]} : different property names`] : false;
      };
    };

    for( i in keys1 ){
      if(values1[i] !== values2[i]){
        let nestedCheck = equalChecker(values1[i], values2[i], checkType, errMsg);
        if(errMsg){
          if(nestedCheck[0] == false) return nestedCheck;
        }
        if(!nestedCheck) return nestedCheck;
      }
    }

    return true;
  }
  else{
    let result = checkType ? value1 === value2 : value1 == value2;

    if(errMsg){
      return result ? result : [false, `${value1} and ${value2} : different values or types`];
    }
    else return result;
  }
};

module.exports = equalChecker;