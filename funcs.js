
function getMean(numbers){
    let nums=[]
    let total = 0;
    for(let n of numbers){
        let num = Number(n)
        if(Number.isNaN(num)) {
            throw new ExpressError(`${n} is not a number...`, 500)
        } else{
            nums.push(num)
            total += num
        }
    }
    let m = total/ nums.length;
    return m;
}

function getMedian(numbers){
    let nums=[]
    for(let n of numbers){
        let num = Number(n)
        try{
            if(Number.isNaN(num)) {
                throw new ExpressError(`${n} is not a number...`, 500)
            } else{
                nums.push(num)
            }
        } catch(e){
            next(e)
        }
    }
    let orderedNums = nums.sort(function(a, b){return a - b});
    let len = orderedNums.length;
    let middle = Math.floor(len/2)
    let m;
    if (len%2 === 1) {
        m = orderedNums[middle]
    } else {
        let m1 = orderedNums[middle-1]
        let m2 = orderedNums[middle]
        m = (m1+m2)/2
    }
    return m
}

function getMode(numbers){
    let nums=[]
    for(let n of numbers){
        let num = Number(n)
        try{
            if(Number.isNaN(num)) {
                throw new ExpressError(`${n} is not a number...`, 500)
            } else{
                nums.push(num)
            }
        } catch(e){
            next(e)
        }
    }
    let orderedNums = nums.sort(function(a, b){return a - b});
    let n = orderedNums.reduce(function(acc,next){
        acc[next] = (acc[next] || 0)+1;
        return acc;
    },{})
    let count = 0;
    let m;
    for(let num in n){
        if(n[num] > count){
            m = num;
            count = n[num] 
        }
    }
    return Number(m)
}


module.exports = {
    getMean,
    getMedian,
    getMode
}