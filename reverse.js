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