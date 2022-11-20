

function square(val){
    return  res_square = val*val;
}


function cube(val,callback){
    return  square(val)*val;
}


function powerOfFour(val,callback){
    
    let result_powerOfFour = callback(val)*val;
    return result_powerOfFour;
}

console.log(square(23));
console.log(powerOfFour(2,cube));



