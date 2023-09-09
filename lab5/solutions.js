// Solution to Problem 1
// Function using function declaration
function sum(nums) {
	return nums.filter(num => num > 20).reduce((a, b) => a + b);
}


// Solution to Problem 2
// Function using function expression 
const getNewArray = function(strs) {
	return strs.filter(str => str.length >= 5 && str.includes("a"));
}

console.log(sum([1, 5, 10, 20, 20, 30, 30]));
console.log(getNewArray(["apple", "cat", "bangla", "ant"]));