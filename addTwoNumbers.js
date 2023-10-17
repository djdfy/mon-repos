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

//real listNode

var addTwoNumbers = function(l1, l2) {        
        function addLn(l1, l2, add = 0) {
            if (l1 || l2) {
                let val1 = l1 ? l1.val : 0;
                let val2 = l2 ? l2.val : 0;
                let next1 = l1 ? l1.next : null;
                let next2 = l2 ? l2.next : null;
                let sum = val1 + val2 + add;
                let val = sum % 10;                
                add = Math.floor((sum)/10);
                return new ListNode(val, addLn(next1, next2, add));
            } else if (add > 0)
                return new ListNode(add, null);
        }
       
        return addLn(l1, l2)
};