var stringifyJSON = function(obj){
//refactor to use typeof
  var isNumber = function (n) {
    return (typeof(n) === "number")
  }

  // if(Array.isArray(obj)){
  //   var arrayResult = '[';
  //   for (var i in obj){
  //     if ( isNumber(obj[i]) ) {
  //       arrayResult += obj[i] + ',';
  //     }else if(typeof(obj[i])==="boolean" || obj[i] === null){
  //       arrayResult += obj[i] + ',';
  //     }else{
  //       arrayResult += '"' + obj[i] + '",';
  //     }
  //   } 

  //   return arrayResult.replace(/,$/, "")  + ']';
  // }

  if(Array.isArray(obj)){
    var result = '[';
  }else {
  result = '{';
  } 

  var recur = function(obj){
    for (var i in obj){
      if (!Array.isArray(obj)){
        result += '"'+ i +'"'+':';
      }

      if ( isNumber(obj[i]) ){
        result += obj[i] +',';
      } else if (typeof(obj[i]) === 'boolean' || obj[i] ===null){
        result += obj[i] + ',';
      } else if ( typeof(obj[i]) === "object" ){
        if(Array.isArray(obj[i])){
          result+= '[';
          recur(obj[i]);
          result = result.replace(/,$/, "");
          result+= '],'; 
        }else {
          result+= '{'; 
          recur(obj[i]);
          result = result.replace(/,$/, "");
          result+= '},';
          } 

      } else if ( !isNumber(obj[i]) ){
        result += '"'+obj[i] + '",';
      };
    }
  }

  recur(obj);
  result = result.replace(/,$/, "");
  if(Array.isArray(obj)){
      result += ']';
    }else {
      result += '}';
  }
  return result; 
};
    





