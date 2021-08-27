const find=require('../find');
const items = [1, 2, 3, 4, 5, 5];
function cb(value){
    let output=undefined;
    for(var i=0;i<value.length;i++){
        if(value[i]==4){
            output=value[i];
            break;
        }
    }
    console.log(output);
}

find(items,cb);
// console.log(each);

