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



function fib (n){
    if (n < 2)
        return n; 
    let f0 = 0;
    let f1 = 1;
    let i = 2;
    let fib;
    while (i <= n) {
        fib = f0 + f1;
        f0 = f1;
        f1 = fib;
        i++;
    }
    return fib
};

function fib (n){    
  function  calcFib (n, a=0, b=1) {
    if (!n) return 0;
    let sum = a + b;
    return ((--n) ? calcFib(n, b, sum) : b);
  }  
  return calcFib(n);        
};