// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// console.log(arr);


// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// console.table(arr);


// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// console.log(arr[3]);

// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// console.log(arr.length-1);


// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// arr.push("sohan");
// console.log(arr);




// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// arr.push("sohan");
// arr.pop();
// console.log(arr);


// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// arr.unshift("sohan");
// console.log(arr);


// const arr = ["Ram", "sita","Rohan",1,2,3,4];

// arr.unshift("sohan");
// arr.shift();
// console.log(arr);



//sum of array
// const num = [10,20,30,40,50];
// let sum=0;
// for(let i=0; i<num.length; i++){
//  sum=sum+(num[i]);
// }
// console.log(sum);



//largest num of array
// const num = [10,20,100,90,80];
// let sum=0;
// for(let i=0; i<num.length; i++){
//  if(num[i]>sum){
//  sum=num[i]
//  } 
// }
// console.log(sum);

//small number
// const num = [10,20,100,5,80];
// let sum=num[0];
// for(let i=0; i<num.length; i++){
//  if(num[i]<sum){
//  sum=num[i]
//  } 
// }
// console.log(sum);



// let num = [1,2,3,4,5];
// console.log(num.reverse());



// let num = [1,2,6,4,5];
// for(let i=num.length-1; i>=0; i--){
//     console.log(num[i]);  
// }



// let arr= [10,20,40,30,15];
// arr.sort(function(a,b){
//     return a-b;
// })

// console.log(arr);





// let arr= [10,20,40,30,15];
// arr.sort(function(a,b){
//     return b-a;
// })

// console.log(arr);





// let fruits = ["apple", "mango", "banana"];

// console.log(fruits.includes("mango"));




// let fruits = ["apple", "mango", "banana"];
// let check = "apple";

// let found = false;

//  for(let i=0; i<fruits.length; i++){
//      if(fruits[i] === check){
//         found = true;
//         break;
//      }
//  }
//  if (found){
//     console.log("true");
    
//  }else{
//     console.log("false");
//  }



// let names = ["Oggy", "Jack", "Bob", "Olly","Budh","Badri", "Tom", "Jerry"]

// console.log(names.join(","));




// let names = ["Oggy", "Jack", "Bob", "Olly","Budh","Badri", "Tom", "Jerry"]

// names.forEach(function(value){
//    console.log(value);
   
// })


//MAP

// let num = [1,2,3,4,5,6]

// num.map((value)=>{
//    console.log(value+2);
   
// })




// FILTER

// let num = [1,2,3,4,5,6]

// let result=num.filter((val)=>{
//    return val%2===0;
// })
// console.log(result);

// let even=num.filter((val)=>{
//    return val%2!=0;
// })
// console.log(even);



// let data =[
//    {
//       "name": "Raja",
//       "Post": "..."
//    },
//     {
//       "name": "Raja",
//       "Post": "..."
//    },
//     {
//       "name": "Raja",
//       "Post": "..."
//    },
//     {
//       "name": "Raja",
//       "Post": "..."
//    },
// ]
// console.log(data);

// console.table(data)

// for(let i=0; i<data.length; i++){
//    console.log(data[i].name);
   
// }




// let num = [1,2,3,4,5];

// let total = num.reduce((acc, cv)=>{
//    return acc + cv
// },0)
// console.log(total);



let num = [1,2,3,4,5];

let total = num.reduce((acc, cv)=>{
   return acc * cv
},1)
console.log(total);


















