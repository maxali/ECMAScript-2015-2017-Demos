'use strict';

import 'babel-polyfill';
import expect from 'expect';

var solved = 0;
const toSolve = 24;

///////// Instructions /////////
/* 

1. Open a console in this folder
   TIP: In Windows Explorer SHIFT + <right click> opens a popup menu with the option "Open Command Window Here". 

2. Install npm
   * In the console, run 'npm init' and follow the instructions. Generally you can accept the default (type enter), only for the name choose 'es2015-lab'

3. Install babel
   * In the console, run 'npm install babel-cli babel-preset-es2015 babel-polyfill --save-dev'
   This will install the files in the 'node_modules' folder and add them as development dependencies to the package.json
   In case you want to install the files again and you have a correct package.json, just run 'npm install'.
  
4. Install expect
   * In the console, run 'npm install expect --save'
   This will install the files in the 'node_modules' folder and add them as runtime dependencies to the package.json

5. To transpile this ES2015 file into ES5, open a console and
     a. Windows: Run "babel-watch.bat"
	 b. OSX: Run "bash babel-watch.sh"
   This will create a file "test.js" every time you save this file.
   If transpilation fails, you can see the error and call stack in this console.
   
6. Open a second console.
   To run the file created in 5, type on the command line: "node test.js"
   If nothing appears, transpilation in step 5 probably failed.
   If there appears an error, an expect has failed and you need to adjust your code.
   If things are going well, you will see the number of succeeded tests on the last line.

7. The excercises are in this file and are commented out functions that will execute immediately.
   Comment out one function and make it run.
   There is always a comment explaining the excercise.
	 The comment is generally before at the beginning, otherwise before the line that should be changed.
   Never adjust the lines below the "Don't make changes below this line." line.
   
Good luck!

*/

/// const ///

(function UseConst() {
	// 1. Observe in the console that Babel cannot transpile this function.
	// 2. Therefor remove const to make the ES5 transpiler succeed.
	let x = 1;
	
	x = 2;

	// Don't make changes below this line	
	
	expect(x).toBe(2);
	
	solved++;
})();

/// let ///


(function UseLet() {
	let x = 1;
	if (true) {
		// Use let to make the function succeed.
		x = 1;
	}

	// Don't make changes below this line	
	
	expect(x).toBe(1);
	
	solved++;
})();

/// class ///
(function UseClass1() {
	// Let Multiplier be a class with the appropriate methods to succeed.
	class Multiplier {
		
		constructor(x){
			this.x=x;
		}

		multiply(y){
			return this.x * y;
		}	
	}


	// Don't make changes below this line	
	
	let m = new Multiplier(2);
	
	expect(m.multiply(3)).toBe(6);
	
	solved++;
})();



/// arrow functions ///

(function UseArrow1() {
	// Rewrite double as arrow function and make the test pass.
	var double = x => x*2;

	// Don't make changes below this line	
	
	expect(double(3)).toBe(6);
	
	solved++;
})();

(function UseArrow2() {
	// Correct the errors in the arrow function.
	var add = (x, y) => x + y;

	// Don't make changes below this line	
	
	expect(add(3, 5)).toBe(8);
	
	solved++;
})();


(function UseArrow3() {
	// Rewrite all functions as arrow functions. Use as minimal syntax as possible.
	var one = () => 1; 
	var two = x => x + x;
	var three = (x, y) => x + y;
    var four = (x, y) => {
		let result = 0;
		for (let i = x; i < y; i++)
			result += i;
		return result;
	};

	// Don't make changes below this line	
	
	expect(one()).toBe(1);
	expect(two(1)).toBe(2);
	expect(three(1,2)).toBe(3);
	expect(four(3, 6)).toBe(12);
	
	solved++;
})();


/// functions default parameters ///


(function UseDefaultParameters() {
	// Correct the syntax errors in the arrow function.
	var hello = (who = "World") => "Hello " + who + "!";

	// Don't make changes below this line	
	
	expect(hello()).toBe("Hello World!");
	
	solved++;
})();

/// Spread operator ///


(function UseSpreadOperator1() {
	var add = (a, b, c) => a + b + c;
	
	var values = [1, 3, 6];
	
	// Use spread operator to let the test pass.
	var result = add(...values);

	// Don't make changes below this line	
	
	expect(result).toBe(10);
	
	solved++;
})();

(function UseSpreadOperator2() {
	let arr1 = [1, 2, 3];
	let value = 4;
	let arr2 = [5, 6];
	
	// Change after = to let the test pass. DO NOT use concat or loops, but use the spread operator.
	let result = [...arr1, value, ...arr2];

	// Don't make changes below this line	
	
	expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	
	solved++;
})();

/// Template strings ///

(function UseTemplateStrings1() {
	const who = "World";
	const addOne = x => x + 1;
	
	// Rewrite the line below to use template literals.
	const greeting = `Hello ${who}! ${addOne(2)} times.`;

	// Don't make changes below this line	
	
	expect(greeting).toBe("Hello World! 3 times.");
	
	solved++;
})();

(function UseTemplateStrings2() {
	// Rewrite the line below to use a template string.
	const text = `line 1
line 2`;

	// Don't make changes below this line	
	
	expect(text).toBe("line 1\nline 2");
	
	solved++;
})();

/// Rest parameter ///

(function UseRestParameter() {
	// Add just one rest parameter to let the test pass.
	function foo(a, b, ...rest) {
		return a + b + rest.length;
	}

	// Don't make changes below this line	
	
	expect(foo(1, 2, "test", true, 123)).toBe(6);
	
	solved++;
})();

/// Property shorthand ///

(function UsePropertyShorthand() {
	const name = 'Oslo';
	const age = 985;
	const norwegian = true;
	
	// Remove all unnecesary syntax to let the test pass.
	let city = {
		name,
		age,
		dutch: !norwegian
	};

	// Don't make changes below this line	
	
	expect(city).toEqual({name: 'Oslo', age: 985, dutch: false});
	
	solved++;
})();

/// Method definitions ///

(function UseMethodDefinitions() {
	// Use method properties to remove unnecessary syntax. DO NOT use arrow functions.
	let obj = {
		add(a, b) { return a + b; },
		subtract(a, b) { return a - b; }
	}

	// Don't make changes below this line	
	
	expect(obj.add(5, 2)).toBe(7);
	expect(obj.subtract(5, 2)).toBe(3);
	
	solved++;
})();

/// Destructuring ///

(function UseArrayDestructuring1() {
	const arr = [1, 2, 3, 4, 5, 6];
	
	// Use array destructuring to change the 3 statements below into 1 statement.
	// Tip: Spread operator might be needed too.
	
	let [a, , b, ...c ] = arr;
	// Don't make changes below this line	
	expect(a).toEqual(1);
	expect(b).toEqual(3);
	expect(c).toEqual([4, 5, 6]);
	
	solved++;
})();

(function UseArrayDestructuring2() {
	let a = 1;
	let b = 2;
	
	// Use array destructuring to change the 3 statements below into 1 statement.
	// You should not need a temporary variable anymore.
	// let tmp = a;
	// a = b;
	// b = tmp; 
	[a, b] = [b, a];
	// Don't make changes below this line	
	
	expect(a).toEqual(2);
	expect(b).toEqual(1);
	
	solved++;
})();



(function UseObjectDestructuring1() {
	let obj = {
		name: 'Oslo',
		age: 985,
		add: (x, y) => x + y
	}
	
	// Use object destructuring to change the 3 statements below into 1 statement.
	// let name = obj.name;
	// let age = obj.age;
	// let add = obj.add;
	let { name, age, add } = obj;
	// Don't make changes below this line	
	
	expect(name).toBe('Oslo');
	expect(age).toBe(985);
	expect(add(1, 2)).toBe(3);
	
	solved++;
})();

(function UseObjectDestructuring2() {
	let obj = {
		name: 'Oslo',
		age: 985,
		add: (x, y) => x + y
	}
	
	// Use object destructuring to change the 3 statements below into 1 statement.
	// let a = obj.name;
	// let b = obj.age;
	// let c = obj.add;
	let {name: a, age: b, add: c} = obj;
	// Don't make changes below this line	
	
	expect(a).toBe('Oslo');
	expect(b).toBe(985);
	expect(c(1, 2)).toBe(3);
	
	solved++;
})();


(function UseNestedDestructuring() {
	let obj = {
		add: (x, y) => x + y,
		city: { name: 'Oslo', age: 985 },
		arr: [1, 2, 3]
	};
	
	// Use destructuring to change the 3 statements below into 1 statement.
	// let a = obj.add;
	// let b = obj.city.name;
	// let c = obj.arr.slice(1);
	let { add: a, city: { name: b }, arr: [, ...c] } = obj;
	
	// Don't make changes below this line	
	
	expect(a(1, 2)).toBe(3);
	expect(b).toBe('Oslo');
	expect(c).toEqual([2, 3]);
	
	solved++;
})();

(function UseParameterDestructuring() {
	// Adjust the code to let the test succeed.

	let a = 'Oslo';
	let b = 985;
	[a, b] = [[a, b], {name: a, age: b}]

	// Don't make changes below this line	
	
	function f([name, age]) {
		expect(name).toBe('Oslo');
		expect(age).toBe(985);
	}
	
	function g({name, age}) {
		expect(name).toBe('Oslo');
		expect(age).toBe(985);
	}

	f(a);
	g(b);
		
	solved++;
})();

(function UseFailSoftDestructuring() {
	let arr = [1, 2];
	
	// change the line below to let the tests succeed.
	let [a, b, c, d] = [...arr, 1+2];

	// Don't make changes below this line	
	
	expect(a).toBe(1);
	expect(b).toBe(2);
	expect(c).toBe(3);
	expect(d).toBe(undefined);

	solved++;
})();

/// Object.assign ///


(function UseObjectAssign1() {
	let obj = { val: 1 };
	
	// Use Object.assign to let the tests succeed.
	let copy = Object.assign({}, obj);

	// Don't make changes below this line	
	
	expect(copy.val).toBe(1);
	
	copy.val = 2;
	expect(obj.val).toBe(1);

	solved++;
})();

/*
(function UseObjectAssign2() {
	let obj1 = { a: 100, b: 2, c: 300 };
	let obj2 = { b: 0, d: 100, e: 200};
	let obj3 = { b: 3, c: 4, d: 5 };
	
	// Change Object.assign to let the tests succeed.
	let result = Object.assign({}, obj3, obj1, obj2);

	// Don't make changes below this line	
	
	expect(result.a).toBe(100);
	expect(result.b).toBe(0);
	expect(result.c).toBe(4);
	expect(result.d).toBe(100);
	expect(result.e).toBe(200);

	solved++;
})();

*/

/// Iterable ///


(function UseGeneratorFunction() {
	// Rewrite the function below to be a generator function ("function*" and "yield").
	function range(start, end) {
		var list = [];
		while (start < end) {
			list.push(start);
			start++;
		}
		return list;
	}	

	// Don't make changes below this line	

	let result = [];
	for (let i of range(2, 7)) {
		result.push(i);
	}
	
	expect(result).toEqual([2, 3, 4, 5, 6]);

	solved++;
})();

if (solved === toSolve) {
	console.log('All tests pass!');
}
else {
	console.warn((toSolve - solved) + ' tests left to solve.');
}