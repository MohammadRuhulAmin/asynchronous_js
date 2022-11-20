const taskOne = (callback)=>{
    setTimeout(()=>{
        console.log("Task One");
        callback();
    },3000)
}


const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log("Task Two");
        callback();
    },0)
}


const taskThree = (callback)=>{
    setTimeout(()=>{
        console.log("Task Three");
        callback();
    },8000)
}

const taskFour = ()=>{
    setTimeout(()=>{
        console.log("Task Four");
        
    },5000)
}

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour();
        });
    });
});



// taskOne();
// taskTwo();
// taskThree();
// taskFour();
