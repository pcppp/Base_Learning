const item = [1,2,3,4,21,21,22,2,2,5]
const estimate = (index)=>{
    if(index === 3){
        return 20
    }
    return 10
}
const estimates =Array.from({length:item.length},(_,index)=>{
    return estimate(index)
})
console.log('estimates', estimates)
const initalValue = 0
const endValue =  estimates.reduce((previou,current)=>previou+current,initalValue)
console.log('endValue', endValue)