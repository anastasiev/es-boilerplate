'use strict';
export default ({id, firstName, lastName, age, sex}) => {
    if(typeof id !== 'number'){
        throw new Error('id is not number');
    }
    if(typeof firstName !== 'string'){
        throw new Error('firstName is not string');
    }
    if(typeof lastName !== 'string'){
        throw new Error('lastName is not string');
    }
    if(typeof age !== 'number' || age <= 0){
        throw new Error('age is not number or less then 0');
    }
    if(typeof sex !== 'string' || !["male", "female"].includes(sex)){
        throw new Error('sex is not string or is not valid');
    }
}
