// performing an array operation 

const add_all_array = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const sum = arr.reduce((accu,curr)=>{
    accu = accu + curr;
    return accu;
    },0)

    return sum ;
}

const add_all_odd_number = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const sum = arr.filter((value)=>{
        return value % 2 !== 0;
    });

   const sum_of_odd = sum.reduce((accu,curr)=>{
        accu = accu + curr;
        return accu;
        },0)

        return sum_of_odd;
}


const add_all_even_number = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const sum = arr.filter((value)=>{
        return value % 2 === 0;
    });

   const sum_of_even = sum.reduce((accu,curr)=>{
        accu = accu + curr;
        return accu;
        },0)

        return sum_of_even;
}

const max_number = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const num = arr.reduce((accu,curr)=>{
        if(curr > accu){
              accu = curr;
        }
        return accu;
    },Number.NEGATIVE_INFINITY)
    return num;
}


const min_number = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const num = arr.reduce((accu,curr)=>{
        if(curr < accu){
              accu = curr;
        }
        return accu;
    },Number.POSITIVE_INFINITY)
    return num;
}

const greater_than_target_value = (arr,target)=>{
    const value = arr.filter((ele)=>{
        return ele > target;
    })
    return value;
}

const smaller_than_target_value = (arr,target)=>{
    const value = arr.filter((ele)=>{
        return ele < target;
    })
    return value;
}
const even_number = (arr)=>{
    const value = arr.filter((ele)=>{
        return ele % 2 === 0;
    })
    return value;
}

const odd_number = (arr)=>{
    const value = arr.filter((ele)=>{
        return ele % 2 !== 0;
    })
    return value;
}

const square_add_all_even_number = (arr)=>{
    if(!Array.isArray(arr)) return "provide an proper array"
    const sum = arr.filter((value)=>{
        return value % 2 === 0;
    });

   const sum_of_even = sum.reduce((accu,curr)=>{
        accu = accu + curr *curr;
        return accu;
        },0)

        return sum_of_even;
}


const utility = {
    add_all_array,
    add_all_even_number,
    add_all_odd_number,
    max_number,
    min_number,
    greater_than_target_value,
    smaller_than_target_value,
    even_number,
    odd_number,
    square_add_all_even_number
}
module.exports = utility;


