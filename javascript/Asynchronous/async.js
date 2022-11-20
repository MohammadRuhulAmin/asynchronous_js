const taskOne = ()=>{
    setTimeout(()=>{
        console.log("Task One");
    },3000)
}


const taskTwo = ()=>{
    setTimeout(()=>{
        console.log("Task Two");
    },0)
}


const taskThree = ()=>{
    setTimeout(()=>{
        console.log("Task Three");
    },8000)
}


const taskFour = ()=>{
    setTimeout(()=>{
        console.log("Task Four");
    },5000)
}


taskOne();
taskTwo();
taskThree();
taskFour();

