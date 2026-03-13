// Exercise 1: Copy & Extend an Array
let fruits = ["apple", "banana"];
let moreFruits = [...fruits, "orange"];
console.log(fruits);
console.log(moreFruits);



// Exercise 2: Update User Object
let user = {
  name: "Ravi",
  city: "Hyderabad"
};

let updatedUser = { ...user, age: 25 };
console.log(user);
console.log(updatedUser);


//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(2, 3, 4));
console.log(sum(200, 300, 400));


// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// deep copy
const copiedOrder = structuredClone(order);

// modify copied object
copiedOrder.customer.address.city = "Mumbai";
copiedOrder.items[0].price = 80000;

// logging
console.log("Original Order:", order);
console.log("Copied Order:", copiedOrder);