const each=require('../each');
const items = [1, 2, 3, 4, 5, 5];
function cb(value){
    console.log(value);
}

each(items,cb);
// console.log(each);

