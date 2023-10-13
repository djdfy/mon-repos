var decodeString = function(s){
  function findOpenCloseParams(str) {
    let open = [];    
    let i = 0;
    while(str[i] !== "]" && i < str.length) {
      if (!isNaN(str[i])) {
        if (open.length == 0) {
            open.push({
              multyplier : str[i]
            })
          } else {
            if (open[open.length-1].openBracketIndex == undefined)
              open[open.length-1].multyplier += str[i]
            else
              open.push({
                multyplier : str[i]
              })
          }         
      }
          
      if (str[i] === "[")
        open[open.length - 1].openBracketIndex = i
      i++;              
    }

    if (open.length !== 0)
      return [open[open.length-1], i];
    else return []
  }

  let arr = [];    
  arr = findOpenCloseParams(s)
  if (arr.length > 0){ 
    let left = s.slice(0, arr[0].openBracketIndex - arr[0].multyplier.length) || '';
    let right = s.slice(arr[1]+1) || '';        
    let insert = s.slice(arr[0].openBracketIndex+1, arr[1]);          
    let str = left + insert.repeat(Number(arr[0].multyplier)) + right;
    return decodeString(str);            
  } else {
    return s
  }
};