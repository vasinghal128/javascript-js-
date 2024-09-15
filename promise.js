// function savetoDB(data,success, faliure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         faliure();
//     }
// }
// savetoDB("Vaibhav",()=>{
//     console.log("Success: Your data was saved");
//     savetoDB("Singhal", ()=>{
//         console.log("Success: Your data was saved");
//     },()=>{
        
//     })
// },()=>{
//     console.log("Faliure: Week connection data was not saved");
// });

// optimze code by promise function

function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("Success: Your data was saved");
        }
        else{
            reject("Faliure: Week connection data was not saved");
        }
    });
}
savetoDB("Vaibhav")
.then((result)=>{
    console.log("data 1 saved:promise was resolved");
    console.log(`result ${result}`);
    return savetoDB("Singhal")
})
.then((result)=>{
    console.log("data 2 saved:promise was resolved");
    console.log(`result ${result}`);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log(`result ${error}`);
});