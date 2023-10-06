let nums = [3,3];
let target = 6;

function twoSum(nums, target) {
  	let hashMap = new Map();
  	for (let i=0; i < nums.length; i++) {
    	let diff = target - nums[i];
        if (hashMap.has(diff))
            return [i, hashMap.get(diff)];
      	hashMap.set(nums[i], i);      	
    }
  	return null;
}

console.log(twoSum(nums, target))