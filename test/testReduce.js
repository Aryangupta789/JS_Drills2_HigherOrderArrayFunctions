const reduce=require('../reduce');
const items = [1, 2, 3, 4, 5, 5];
function cb(value){
    let output=0;
    for(var i=0;i<value.length;i++){
        output+=value[i];
    }
    return output;
}

console.log(reduce(items,cb));

