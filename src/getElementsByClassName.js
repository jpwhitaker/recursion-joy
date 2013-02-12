var getElementsByClassName = function(className){
  var answer = [];

  var checkHasClass = function(element){
    for (var key in element.classList){
      if(element.classList[key] === className){
        answer.push(element);
      }
    }

    if(element.hasChildNodes()){
      for (var i = 0; i < element.childNodes.length; i++){
        checkHasClass(element.childNodes[i]);   
      };
    }
  }

  checkHasClass(document.body);

  return answer;
}