let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];

function addTwoNumbers1 (l1, l2) {
	function getReverseString(arrOfNumbers) {
		return arrOfNumbers.reverse().reduce(function (previousValue, currentValue) {
			return previousValue + currentValue.toString();
		});
	}
	let s1 = getReverseString(l1);
	let s2 = getReverseString(l2);

	let res = (BigInt(s1) + BigInt(s2)).toString().split("").reverse();
  	return res
}

function addTwoNumbers2 (l1, l2) {
  	let res = [];
	let length = l1.length >= l2.length ? l1.length : l2.length;  	
  	let add = 0;
  	for (let i = length-1; i >= 0; i--) {
      	let a1 = l1.length > 0 ? l1.pop() : 0;
        let a2 = l2.length > 0 ? l2.pop() : 0;
      	let sum = a1 + a2 + add;
      	if (sum > 9) {          	
          	add = 1;
          	sum -= 10;
          	res.push(sum);
        } else {
        	res.push(sum);
          	add = 0;
        }
    }
  	if (add == 1)
      res.push(1)
  	return res
}