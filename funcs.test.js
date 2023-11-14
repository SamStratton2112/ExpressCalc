const {
    getMean,
    getMedian,
    getMode
} = require('./funcs')

describe('test get mean function', function (){
    test('Should return 2', function(){
        let nums = [1,2,2,3]
        let m = getMean(nums)
        expect(m).toEqual(2) 
    })

    test('Should return 3', function(){
        let nums = [1,2,3,4,5]
        let m = getMean(nums)
        expect(m).toEqual(3) 
    })
})

describe('test get median function', function (){
    test('Should return 12', function(){
        let nums = [10,12,13]
        let m = getMedian(nums)
        expect(m).toEqual(12) 
    })

    test('Should return 4.5 ', function(){
        let nums = [1,2,3,4,5,6,7,8]
        let m = getMedian(nums)
        expect(m).toEqual(4.5) 
    })
})

describe('test get mode function', function (){
    test('Should return 2', function(){
        let nums = [1,1,2,2,2,2,33,3,3]
        let m = getMode(nums)
        expect(m).toEqual(2) 
    })

    test('Should return 0.5', function(){
        let nums = [1,1,.5,.5,.5,.5]
        let m = getMode(nums)
        expect(m).toEqual(0.5) 
    })
})