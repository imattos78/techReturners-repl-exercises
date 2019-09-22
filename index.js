//Array of number for Ex 1, 2, 3, 9 
//const arr = [23, 56, 34, 222, 798, 1250, 67, 98, 12, 8, 79, 900, 244];

//Ex 1. Use forEach to create a total of all the numbers.
// let sum = 0;
// arr.forEach((num)=> sum += num);
// console.log(sum);

//Ex 2. Use filter to keep only numbers greater than 100.
// const greaterThanUndred = arr.filter((num)=> num > 100);
// console.log(greaterThanUndred);

//Ex 3. Use filter to keep only even numbers
// const evenNum = arr.filter((num)=> num % 2 == 0);
// console.log(evenNum);

//Ex 9. Use map to create an array of the squere of each of these numbers.
// const square = arr.map((num)=> Math.pow(num,2));
// console.log(square);

//#####################################################//
// Array of names for Ex. 4, 5
//const people = ["jennifer", "loren", "gabriella", "ignacio", "albert", "carrie"];

//Ex 4. Use map to transform each name so that is begins with a capital letter.
// const capFirstLetter = people.map((name) =>`${name.slice(0,1).toUpperCase()}${name.slice(1)}`); 
// console.log(capFirstLetter);

//Ex 5. Use filter to keep only the names which are longer than 5 characters.
// const greaterThanFive = people.filter((name)=> name.length > 5);
// console.log(greaterThanFive);

//******************************************************//
// Array of mixNumbers for Ex. 6,7,8
//const mixNumbers = [32, 12.5, 44, 56.2, 95.3, 0.34, 45];

//Ex 6. Use filter to keep only the whole numbers.
//const wholeNum = mixNumbers.filter((num)=> Number.isInteger(num));
// console.log(wholeNum);

//Ex 7. Use forEach to sum up all the whole numbers.
// let sum = 0;
// mixNumbers.forEach((num)=> Number.isInteger(num)? sum += num : false);
// console.log(sum);

//Ex 8. Use forEach to create a count of how many decimal numbers are in the array.
// let count = 0;
// mixNumbers.forEach((num)=> count += !Number.isInteger(num));
// console.log(count);

//###################################################//
//Array of objects representing people for Ex. 10, 11, 12
// const peopleObj = [{name:"Jennifer", age:30, profession:"Lawer"},
// {name:"Nacho", age:40, profession:"Developer"},
// {name:"Albert", age:18, profession:"Lawer"},
// {name:"Helen", age:15, profession:"Student"},
// {name:"Carlos", age:17, profession:"Student"}]

//Ex 10. Use map to create an array of just the names
// const names = peopleObj.map((n)=>n.name);
// console.log(names)

//Ex 11. Use filter to create an array of people 18 years old or more
// const adults = peopleObj.filter((n)=> n.age >= 18);
// console.log(adults);
//Using forEach to create an array only with the names 18 years old or more ;)
// let adultsNames = [];
// peopleObj.forEach((n)=> n.age >= 18 ? adultsNames.push(n.name) : false);
// console.log(adultsNames);

//Ex 12. Use forEach to count how many people are lawyers.
// let count = 0;
// peopleObj.forEach((n)=> n.profession == "Lawer" ? count++ : false);
// console.log(count);