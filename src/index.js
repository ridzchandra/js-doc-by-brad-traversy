/** @format */

const { add, subtract, divide, multiply } = require("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Ridz Chandra
 * @see <a href="https://www.linkedin.com/in/ridz-balla/">Ridz' Linkedin</a>
 */

// Within js-doc comments you can use commonMark to write description.
// Have to enable CheckJs in vs-code settings or atleat add a comment '// @ts-check' at the top of the file you want to have type check with js-doc
// Can't have any comments between the js-doc comment and it's variable. Otherwise, the variable won't appear in the documentation
/**
 * It's a constant that stores the student's name.
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo has two properties:
 * - id: number
 * - test: string
 * @type {{id: number | string, text: string}}
 */
const todo = {
	id: 1,
	text: "Hello",
};

/**
 *
 * @param {number} price - *Price excluding tax in dollars and cents* **ex: 97.37 for $97.37**
 * @param {number} tax - *Tax in decimals* **ex: 0.1 for 10%**
 * @returns {string}
 */
const calculatePriceIncludingTax = (price, tax) => {
	return `${price + price * tax}`;
};

//Creating a custom type in js-doc
/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

// Using the above created custom type in js-doc
/**
 * An object with student's details
 * @type {Student}
 */
const student = {
	id: 1,
	name: "John Doe",
	age: 20,
	isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
	/**
	 * @param {Object} personInfo Information about the person
	 */
	constructor(personInfo) {
		/**
		 * @property {string} name - Person's name
		 */
		this.name = personInfo.name;
		/**
		 * @property {number} age - Person's age
		 */
		this.age = personInfo.age;
	}

	/**
	 * @property {Function} greet A greeting with the name and age
	 * @returns {void}
	 */
	greet() {
		console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
	}
}

/**
 * Person one: *See {@link Person}*
 */
const person1 = new Person({
	name: "John Doe",
	age: 30,
});
console.log(person1.greet());

console.log(add(20, 50));
