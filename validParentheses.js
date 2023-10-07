
let s = "((([]){}))]";

function isValidParentheses(s) {

    let closedMap = new Map([
                ['(',')'],
                ['[',']'],
                ['{','}']
            ]);
  let stack = [];  
  
  for (let symbol of s) {
    if (closedMap.has(symbol)) {
    	stack.push(symbol);    
    } else if (!closedMap.has(symbol)) {
      let a = stack.pop();
      if (!a || closedMap.get(a) !== symbol)
          return false      
    }
  }

 return stack.length === 0;
}


console.log(isValidParentheses(s))