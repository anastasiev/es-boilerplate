'use strict';
export default ({id, firstName, lastName, age, sex, social}) => {
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
    if(!Array.isArray(social)) {
        throw new Error("Social is not array");
    }
    if(social.length === 0){
        throw new Error("Social is empty");
    }

    social.forEach(item => {
        if(typeof item !== "object"){
            throw new Error("Social item is not object")
        }
        const {id: socialId, title, views} = item;
        if(typeof socialId !== 'number'){
            throw new Error('Social id is not number');
        }
        if(typeof title !== 'string'){
            throw new Error('Social title is not string');
        }
        if(typeof views !== 'number'){
            throw new Error('Social views is not number');
        }
    });
}
