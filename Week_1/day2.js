// function {
//     can return another function
//     can recieve a function as argument
// }

// let makePayment = function(amount,paymentType){
//     console.log(`paying ${amount}`);
//     paymentType(amount);
// }

// let UPIPayment = function(amount){
//     console.log("Upi paymnet done");
// }

// let cardPayment = function(amount){
//     console.log("Card payment done");
// };

// let walletPayment = (amount) => {
//     console.log("Wallet payment done");
// }

// makePayment(1000,cardPayment);

// let sum = function(x){
//     return function(y){
//         return x+y;
//     }
// }

// let x = sum(10);
// console.log(x(20));

//here we do not get the error x is not defined because of closure. Closure is a feature in JavaScript where an inner function has access to the outer function's variables and parameters even after the outer function has returned. In this case, the inner function (the one that takes y as an argument) has access to the variable x from the outer function (the one that takes x as an argument) even after the outer function has returned. This allows us to call x(20) without getting an error.

//every javascript function has closure by default. because of this closure property the varivbles of outside scope will  be maintained temporarily in heap event he outside fucntion execution is completed

// let student = {
//     sno:100,
//     name:"vyom",
//     marks:[85,90,95],
// }

// for (let k in student) {
//     console.log(`${k} is ${student[k]}`);
// }

//ARRAY OF OBJECTS

// let students = [
//   {
//     sno: 100,
//     name: "vyom",
//     marks: [85, 90, 95],
//   },
//   {
//     sno: 101,
//     name: "vishnu",
//     marks: [75, 80, 85],
//   },
//   {
//     sno: 102,
//     name: "vishal",
//     marks: [65, 70, 75],
//   },
// ];

// console.log(students[0].name);
// console.log(students[1].marks[1]);
// console.log(students[2].sno);



// let emp = [
//     { eno: 1, name: "vyom"},
//     { eno: 2, name: "vishnu"},
//     { eno: 3, name: "vishal"},
// ]

// for (let x of emp){
//     console.log(`${x.eno} is ${x.name}`);
// }

// let students = {
//     rollno: 1,
//     firstName: "vyom",
//     lastName: "tadoori",
//     marks: [85, 90, 95],
//     address: {
//         city: "hyderabad",
//         state: "telangana",
//         country: "india"
//     },
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     },
//     getAvgMarks: function(){
//         let sum = 0;
//         for(let x of this.marks){
//             sum+=x;
//         }
//         let avg = sum/this.marks.length;
//         return avg;
//     }
// }

// console.log(students.getFullName());
// console.log(students.getAvgMarks());

// let testArray = [10, 20, 30]
// let insert = function(testArray,element){
//     testArray.push(element);
//     return testArray;
// }

// console.log(insert(testArray,40));

// testArray.push(50, 60, 70);
// console.log(testArray);

// //insert in between(indexed based insertion)
// let splice = function(testArray,index,element){
//     return testArray.splice(index,2,element);
    
// }

// console.log(splice(testArray,2,80));
// console.log(testArray);

// //dynamic deletion 
// let testArray = [10, 20, 30, 40, 50, 60, 70];
// testArray.pop();
// console.log(testArray);

// testArray.shift();
// console.log(testArray);

// testArray.splice(2,2);
// console.log(testArray);

// let spice = function(testArray,index){
//     return testArray.splice(index,2);
// }

// console.log(spice(testArray,2));

