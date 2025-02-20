const comp = {
    setup(){const count = ref(0)
    const c= computd(()=>{return count.value + 1})
    setTimeout(()=>{
        count.value++ 
    },1000)
    const obj ={
        get a(){
            return count.value + 1
        }
    }
    return()=>[h('div',obj.a)
        ]
    }}
