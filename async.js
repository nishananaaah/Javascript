
const promise= new Promise((resolve,reject)=>{
    //    resolve(["apple","banana"]);
       reject("API failed")
});

 async function fetchData(){

    try{
        const response=await promise;
    console.log(response); 
    }
   catch (error){
    console.log(error)
   }

}fetchData();
