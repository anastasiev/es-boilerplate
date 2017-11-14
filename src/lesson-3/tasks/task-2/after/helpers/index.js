export default obj => {
    if(typeof obj.id !== 'number'){
        throw new Error('id is not number');
    }
    if(typeof obj.firstName !== 'string'){
        throw new Error('firstName is not string');
    }
    if(typeof obj.lastName !== 'string'){
        throw new Error('lastName is not string');
    }
    if(typeof obj.age !== 'number' || obj.age <= 0){
        throw new Error('age is not number or less then 0');
    }
    if(typeof obj.sex !== 'string' || !["male", "female"].includes(obj.sex)){
        throw new Error('sex is not string or is not valid');
    }
}
