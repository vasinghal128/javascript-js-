async function greet(){
    throw"404 page not found";
    return "hello!";
}
greet()
.then((result) => {
    console.log("Promise was resolved");
    console.log("result was: ", result);
})
.catch((err)=>{
    console.log(`promise was rejected with err: ${err}`);
});

// await keyword => it is use to wait function for specific time
h2 = document.querySelector("h2");
function changecolor(color, delay){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                rejected("Promise rejected");
            }
            h2.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        },delay);
    });
}
async function demo(){
    try{
        await changecolor("red", 1000);
        await changecolor("violet",1000);
        await changecolor("pink",1000);
        changecolor("blue",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a= 5;
    console.log("new number = ", a + 3);
}