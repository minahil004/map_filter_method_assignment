import inquirer from "inquirer";
// #1 Filter method:
let numbers:number[] = [3,-5,7,8,-6,9,4,-3]
 let posNumbers:number[] = numbers.filter((curElm:number) => curElm > 0)
 console.log(posNumbers);

// #2 Map method:
let numbers:number[] = [1,2,3,4,5]
 let newArray:number[] = numbers.map((curNum:number) => curNum*2)
 console.log (newArray);

// #3 Filter method:
 let fruits:string[] = ["Apple","Banana","Cherry","Date","Grape"]
  let longFruits:string[] = fruits.filter(fruits => fruits.length > 5);
  console.log(longFruits);

// #4 Map and Filter method:
let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
 let result:number[] = numbers.filter((num:number) => num % 2 == 0).map((num:number) => num*num)
 console.log(result);

// #5 Celcius t Fahrenheit using Map method:
let temprature:number[] = [0,10,20,30,40]
 let fahrenheit:number[] = temprature.map((cel:number) => (cel*9/5) + 32);
 console.log(fahrenheit);

// #6 Douling value using Map method:
let numbers:number[] = [3,6,9,12,15,18]
 let doubleVal:number[] = numbers.filter((num:number) => (num % 2 != 0)).map((num:number) => num*2)
 console.log(doubleVal);

// #7 forEach method:
let names:string[] = ["Elice","Bob","Charlie","David","Emily"]
 names.forEach((names:string) => {
    console.log(names + "!")
 })
 