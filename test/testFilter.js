const filter=require('../filter');
const items = [1, 2, 3, 4, 5, 5];
function cb(value){
    let output=[];
    for(var i=0;i<value.length;i++){
        if(value[i]==4){
            output.push(value[i]);
        }
    }
    return output;
}

console.log(filter(items,cb));

