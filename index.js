/**1)
 * The differences between mutating array methods and non-mutation array methods in JavaScript- Mutating array method alters the original array being called while non-mutating array methods simply returns a new array✌️.
 * The values of arrays assigned using the const keyword can be mutated but the entire array cannot be mutated, this is because non-primitive value are mutable in javascript
 * 
 * Examples of mutating array methods are:
 * i. pop()
 * ii. push()
 * iii. shift()
 * iv. sort()
 * v. reverse()
 *  
 * Examples of non-mutation array methods are:
 * i. slice()
 * ii. concat()
 * iii. map()
 * iv. filter()
 * v. ()
 * */ 
// 2
const language = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python'];
console.log(language);
language.push('Kotlin');
console.log(language);
language.splice(3,0,'Java');
console.log(language);
language.shift();
console.log(language);
language.unshift('Scala', 'Swift');
console.log(language);
language.splice(5,1,'Go','Rust');
console.log(language);




// 3
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}
//         console.log(changeFruit(fruit))
// The value of fruit will be ['apple', 'mango', 'orange']