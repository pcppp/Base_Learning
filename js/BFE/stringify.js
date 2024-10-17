
const obj = {
    sybo : Symbol(),
    data:123,
    ss(){
        return 1
    },
    qq:{
        aaa :"aaa"
    }
}
function detectType(data) {
    // your code here
    return Object.prototype.toString.call(data).split(" ")[1].slice(0,-1).toLowerCase();
  }
console.log(JSON.stringify(obj))
console.log(stringify(obj))

function stringify(data) {
    let type = detectType(data)
    switch(type){
        case "null": return null;break;
        case "object": {
            let res = []
            res.push("{")
            for(item in data){
                let json = []
                if (res.length !== 1){
                    res.push(",")
                }
                console.log("stringify(data[item])",stringify(data[item]));
                
                if(stringify(data[item])){
                    json.push("\"" + item + "\":") 
                    json.push(stringify(data[item]))
                }
                if(json.length){
                    res.push(json.join(''))
                }
                }
                
            res.push('}')
            return res.join('')
        }break;
        case "array":{
            let res = []
            res.push("[")
            for(item of data){
                let json = []
                if (res.length !== 1){
                    res.push(",")
                }
                json.push("\"" + item + "\":") 
                json.push(stringify(data[item]))
                if(json.length){
                    res.push(json.join(''))
                }
                }
                
            res.push(']')
            return res.join('')
        }break;
        case "number":{
            return data.toString
        }break;
        case "string":{
            return "\"" + data + "\""
        }break;
        case "boolean":{
            return "\"" + data + "\""
        }break;
        
    }
}
