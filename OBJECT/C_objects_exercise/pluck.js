const pluck = function(obj, arr){
    let newPluck = {};
    for(i =0; i <arr.length; i++){
        let key = arr[i];
        if(obj.hasOwnProperty(key)){
            newPluck[key] = obj[key];
        }
    }
    return newPluck;
}

console.log(pluck({name: 'Fido', color: 'Brown', breed: 'German Shepherd'}, ['name', 'breed', 'color']));

console.log(pluck({ make: 'Tesla', mpg: 93 , model: 'Model X', color: 'white'  }, ['make', 'model']));
// {  make: 'Tesla', model: 'Model X' }
