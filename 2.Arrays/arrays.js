function isArray1(arr) {
	return arr instanceof Array;
}

console.log(isArray1([3,null,undefined,4]));

function isArray2(arr) {
	return Array.isArray(arr);
}

console.log(isArray2([3,null,undefined,4]));
console.log(isArray2({0:2, 1:3}));

function range(from, to, step) {
	var arr = [];
	if (to === undefined) {
		to = from;
		from = 0;
	}
	(step === undefined) && (step = 1);
	for(let i = from; i < to; i += step) {
		arr.push(i);
	}
	return(arr);
}

console.log(range(1,10,2));

function compactCycle(arr) {
	var newArr = [];
	for (let i = 0; i < arr.length; i++) {
		(arr[i] == true) && (newArr.push(arr[i]));
	}
	return newArr;
}

console.log(compactCycle(['', 'true', 1, 0, null]));

function compact(arr) {
	var newArr = [];
	newArr = arr.filter(function(x) {
		return x == true;
	});
	return newArr;
}

console.log(compact(['', '1', 1, 0, null]));

function sum1(arr) {
	var sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(sum1([2, 5, 1]));

function sum2(arr) {
	var sum = 0;
	arr.forEach(function(v) {
		sum += v;
	});
	return sum;
}

console.log(sum2([2, 5, 3]));

function sum3(arr) {
	var sum = arr.reduce(function(x, y) {
		return x + y;
	}, 0);
	return sum;
}

console.log(sum3([2, 5, 3, 4]));

function unique(arr) {
	var newArr = [];
	/*arr.forEach(function(v) {
		(!(v in newArr)) && (newArr.push(v));
	}); does not work((*/
	newArr = arr.filter(function(v, i, a) {
		return a.indexOf(v) === i;
	});
	return newArr;
}

console.log(unique([1,1,2,3,3,3,4]));

function last(arr) {
	return arr[arr.length - 1];
}

console.log(last([2,5,48]));

function excludeLast(arr, n) {
	(n === undefined)  && (n = 1);
	return arr.slice(0, -n);
}

console.log(excludeLast([0,2,5,8,48], 3));
