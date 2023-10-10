function fibArr(n) {
  	let arr = [];
  	let i = 0;
  	while (i <= n) {
    	if (i < 2) {
        	arr.push(i)
        } else {
        	arr.push(arr[i-2] + arr[i-1]);
        }
      	i++;
    }
  	return arr;  
}

console.log(fib(15))

function fibArr1(n) {
  	let arr = [];
  	for (let i=0; i <= n; i++) {
    	if (i < 2) {
        	arr.push(i)
        } else {
        	arr.push(arr[i-2] + arr[i-1]);
        }
    }
  	return arr;  
}

console.log(fib1(15))

let arr = [];
function fibArr2(n) {  	
  let i = arr.length;
  if (i < 2) {
      arr.push(i)
    } else {
      arr.push(arr[i-2] + arr[i-1]);
    }
  	if (i < n)
      fib2(n)
}


fib2(15);
console.log(arr)