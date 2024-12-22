// index.js
const http = require("http"); // Import the HTTP module

// Create the server and define its behavior
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World!\n");
});

const users = [
	{ firstname: "salman", lastname: "mohammad", age: "30" },
	{ firstname: "donald", lastname: "trump", age: "70" },
	{ firstname: "elon", lastname: "musk", age: "50" },
	{ firstname: "asad", lastname: "owasi", age: "50" },
];

const output = users.map(
	(x) => `${x.firstname.toUpperCase()} ${x.lastname.toUpperCase()}`
);
// console.log(output);

const output1 = users.reduce((acc, i) => {
	//   console.log(i.age);
	if (acc[i.age]) {
		acc[i.age] += 1;
	} else {
		acc[i.age] = 1;
	}
	return acc;
}, {});
// console.log(output1);
// Define the port and start the server

// 1. Write a JavaScript function to calculate the sum of two numbers.

const sum = (a, b) => {
	return a + b;
};
// console.log(sum(5, 5))

// 2. Write a JavaScript program to find the maximum number in an array.

const numbers = [6, 3, 7, 9, 2, 4, 1, 0];
const maxNum = numbers.reduce((acc, cur) => {
	// console.log(cur, acc)
	return cur > acc ? cur : acc;
}, numbers[0]);
// console.log(maxNum)

const MaxNumber = Math.max(...numbers);
const MinNumber = Math.min(...numbers);
// console.log(MinNumber)

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

const isPalindrome = (str) => {
	str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	const reversedStr = str.split("").reverse().join("");
	return str === reversedStr;
};
// console.log(isPalindrome('Race Car'))
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('A man,,, a plan, a.,..,.,.,., canal, ...Panama'))

function isPalindrome1(str) {
	let normalizedStr = "";
	// Step 1: Normalize the string by manually removing non-alphanumeric characters
	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		// Check if the character is alphanumeric (a-z, A-Z, 0-9)
		if (
			(char >= "a" && char <= "z") ||
			(char >= "A" && char <= "Z") ||
			(char >= "0" && char <= "9")
		) {
			// Convert to lowercase manually
			normalizedStr +=
				char >= "A" && char <= "Z"
					? String.fromCharCode(char.charCodeAt(0) + 32)
					: char;
			//   console.log(normalizedStr);
		}

		// Step 2: Reverse the normalized string manually
		let reversedStr = "";
		for (let k = normalizedStr.length - 1; k >= 0; k--) {
			reversedStr += normalizedStr[k];
			// console.log(reversedStr);
		}
		// Step 3: Compare the original and reversed strings
		return normalizedStr === reversedStr;
	}
}
// console.log(isPalindrome1("Race Car .. "));

// 4. Write a JavaScript program to reverse a given string.

const reverseString = (str) => {
	return str.split("").reverse().join("");
};
// console.log(reverseString('SALMAN MOHAMMAD'))

const reverseString1 = (str) => {
	let newStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
};
// console.log(reverseString1('Hello World'));

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenNumbers = numbers1.filter((num) => num % 2 === 0);
// console.log(evenNumbers)

// 6. Write a JavaScript program to calculate the factorial of a given number.
const factorial = (num) => {
	if (num == 0 || num == 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};

// console.log(factorial(10))

// 7. Write a JavaScript function to check if a given number is prime.
function isPrime(num) {
	// console.log(Math.sqrt(num))
	if (num <= 1) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		// console.log('sssss', i, num, num % i)
		if (num % i === 0) return false;
	}
	return true;
}
// console.log(isPrime(19))

// 8. Write a JavaScript program to find the largest element in a nested array.
const nestedArray = [[1, 2, 3], [4, [5, 6, 12]], 7, [8, 9, [10, 11]]];

const findLargest = (arr) => {
	// Helper function to flatten the nested array
	const flattenArray = (arr) => {
		let result = [];
		for (let item of arr) {
			// console.log(item);
			if (Array.isArray(item)) {
				result = result.concat(flattenArray(item));
			} else {
				result.push(item);
			}
		}
		return result;
	};
	// Flatten the array and then find the largest number using Math.max
	const flatArray = flattenArray(arr);
	console.log(flatArray);
	return Math.max(...flatArray);
};
// console.log(findLargest(nestedArray));

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

const fibonacci = (n) => {
	let fibonacciSeq = [];
	if (n <= 0) return fibonacciSeq;
	fibonacciSeq.push(0);
	if (n > 1) fibonacciSeq.push(1);
	for (let i = 2; i < n; i++) {
		let nextNum = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
		fibonacciSeq.push(nextNum);
	}
	return fibonacciSeq;
};

// console.log(fibonacci(6));

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
function toTitleCase(str) {
	return str.replace(/\b\w/g, (l) => l.toUpperCase());
}

function toTitleCase(str) {
	return str
		.split(" ") // Split the string into an array of words
		.map((word) => {
			// Capitalize the first letter of each word, and make the rest lowercase
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" "); // Join the array back into a single string with spaces
}

console.log(toTitleCase("hello salman!"));

const port = 5000;
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
