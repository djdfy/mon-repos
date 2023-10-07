let s = "{}{}{{{[]}}}{}";

function isValidParentheses(s) {
	let closedMap = new Map([
			[')','('],
			[']','['],
			['}','{']
		]);
	let i = 0;
	let L = 0;
	while(i < s.length) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          	if (s[i+1]) {
              	i++;
				L++; 
            } else
            	return false;        
		} else if (s[i] !== undefined) {
        	if (L == 0)
            	return false
          	let counter = 1;
        	for(let j=i; j <  i+L; j++) {
              	if (s[j] == undefined || closedMap.get(s[j]) !== s[j-counter])                  
					return false;
              	counter = counter + 2;
			}
          	i += L;
          	L = 0;
        } else
        	return false;
	}

	return true;
}

console.log(isValidParentheses(s))