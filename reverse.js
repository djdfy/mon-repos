var reverse = function(x){
    const constraint = Math.pow(2,31);  
  let res = '';
    let strX = x.toString();
  
    for (let i = strX.length-1; i>=0; i--) {
        if (strX[i] !== '-')
            res += strX[i];
        else
          res = strX[i] + res;      
    }
    res = parseInt(res);
    return  (res >= constraint-1 || res <= -constraint) ? 0 : res;
};


var reverse = function(x) {
  let constraint = 2**31;
  let i = 10;
  let arr = [];
  let res = 0;
  let sign = Math.sign(x);
  x *= sign;
  while (i >= 0) {    
    let a = 10**i;    
    let intVal = Math.floor(x/a);
    if (intVal > 0)
      arr.push(intVal);
    i--;
  }
   
  for (let i = arr.length-1; i >= 0; i--)  {
    let b = arr[i-1]*10 || 0;
    res += (arr[i]-b) * 10**i 
  }
  res = res*sign;
  return  (res >= constraint-1 || res <= -constraint) ? 0 : res;
}