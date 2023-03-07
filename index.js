/**1)
 * The differences between mutating array methods and non-mutation array methods in JavaScript- Mutating array method alters the original array being called upon while non-mutating array methods simply returns a new array.
 * 
 * Some mutating array methods are:
 * i. pop()
 * ii. push()
 * iii. shift()
 * iv. sort()
 * v. reverse()
 *  
 * Some non-mutation array methods are:
 * i. slice()
 * ii. concat()
 * iii. map()
 * iv. filter()
 * v. flat()
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
// The value of fruit will be ['apple', 'mango', 'orange']


// 4 using arrow function

const arrayOfNumbers = [-4,0.5,89,54]
const max = arrayOfNumbers.reduce((value,index) => Math.max(value, index), -100)
console.log("Maximum value is " + max);

// or
const arrayOfNumbers2 = [40,0.8,9,-54]
const max2 = arrayOfNumbers2.reduce(function(value,index){
  return Math.max(value,index)
},-100);
console.log("Maximum value is " + max2);


// 5

const arrOfNumbers = [4, 8, 5];
const valTimesIndex = arrOfNumbers.map(function(value,index){
  return value * index
});
console.log(valTimesIndex);

// or using arrow function
const arrOfNumbers2 = [8, 60, 35];
const valTimesIndex2 = arrOfNumbers2.map((value,index) => value * index);
console.log(valTimesIndex2);