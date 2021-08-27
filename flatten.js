function flatten(elements){
    var array = [];
    for(var i = 0; i < elements.length; i++) {
        if(Array.isArray(elements[i])) {
            array = array.concat(flatten(elements[i]));
        } else {
            array.push(elements[i]);
        }
    }
    return array;
    
}
module.exports=flatten;
