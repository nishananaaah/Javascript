// callback with asynchronus

// console.log("start");
// function getDataFromApi(callback){
//     setTimeout(()=>{
//         callback("nishana")
//     },3000)
// }
// getDataFromApi((value)=>{
//     console.log(value);
// })
// console.log("end")


//promise //

// const promise=new Promise((resolve,reject)=>{
//     reject("faild")
// });

// promise
// .then((response)=>{
//     console.log(response)

// }).catch((error)=>{
//      console.log(error)
// })


//promise.all//
// const promise1 = new Promise((resolve,reject)=>{
//     resolve(["apple","banana"])
// });
// const promise2 = new Promise ((resolve,reject)=>{
//     // resolve(["orange","mango"])
//     reject("API Failed")
// });

// const allPromises= Promise.all([promise1,promise2]);
// allPromises
// .then((response)=>{
//      console.log(response)
//     })
//     .catch((error)=>{
//     console.log(error)
//     });



    //promise allselected//
const promise1=new Promise((resolve,reject)=>{
      resolve(["apple","banana"])
});
const promise2=new Promise((resolve,reject)=>{
    reject("api failed")

});
const allpromises=Promise.allSettled([promise1,promise2])
allpromises.then((response)=>{
      console.log(response);
      
}).catch((error)=>{
     console.log(error)
})