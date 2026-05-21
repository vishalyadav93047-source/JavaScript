// const mydata = new Promise ((resolve, reject)=>{
//     let user = true;
//     if(user){
//         resolve("Welcom")
//     }else{
//         reject("plz logIn")
//     }
// })
// console.log(mydata);


// const mydata = new Promise ((resolve, reject)=>{
//     let user = true;
    
//     setTimeout(()=>{
//         console.log("This is data.........");
        
//     },2000);
// })
// console.log(mydata);



// const mydata = new Promise ((resolve, reject)=>{
//     let user = true;

//      setTimeout(()=>{
//         console.log("This is data.........");
        
//     },2000);
//      if(user){
//          resolve("Welcom")
//     }else{
//         reject("plz logIn")
//    }
    
// })
// console.log(mydata); 


// const mydata = new Promise ((resolve, reject)=>{
//     let user = true;
//     if(user){
//         resolve("Welcom")
//     }else{
//         reject("plz logIn")
//     }
// })

// mydata.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })


const receiveddata = fetch("https://fakestoreapi.com/products");

receiveddata.then((data)=>{
    console.log(data.json());
    
}).catch((err)=>{
    console.log(err);
    
})