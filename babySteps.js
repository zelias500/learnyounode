

// console.log(process.argv);
sum = 0;
nums = process.argv.slice(2);

for (var i = nums.length - 1; i >= 0; i--) {
	sum += +nums[i];
};

console.log(sum);