const promise =new Promise((resolve,reject)=>{
    reject("!")
})
// const fetchData=async()=> {
//     const response=await promise;
//        console.log(response)
    
// }
// fetchData()
//IIFE

// (async()=>{
//     const response=await promise;
//        console.log(response)
// })()

// using try-catch block
const fetchData=async()=>{
  try{
const response=await promise;
console.log(response)
  }catch (error){
      console.log(error)
  }
}
fetchData()