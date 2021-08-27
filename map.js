function map(elements,cb){
    for(var i=0;i<elements.length;i++){
        cb(elements[i]);
    }
}
module.exports=map;
