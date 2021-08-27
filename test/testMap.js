const map=require('../map');
const items = [1, 2, 3, 4, 5, 5];
function cb(value){
    console.log(value*2);
}

map(items,cb);


