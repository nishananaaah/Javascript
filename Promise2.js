// const promise =new Promise((resolve,reject)=>{
//     reject("failed")
// })
// promise.then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

const promise1=new Promise((resolve,reject)=>{
    resolve("success")
});
const promise2=new Promise((resolve,reject)=>{
    resolve("happy")
});
const allpromise =Promise.allSettled([promise1,promise2]);
allpromise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
//promise.all is working all are success anyone is rejected all are reject , it return a  single array of  promises
// promise.allsettled is working anyone success or rejected and  it explain the status and reason
