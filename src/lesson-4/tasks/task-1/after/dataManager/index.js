'use strict';
import validator from '../helpers'

const objCollection = [];
export const addEntities = (...objects) =>{
    objects.forEach(obj => {
        validator(obj);
        if (objCollection.filter(o => obj.id === o.id).length > 0) {
            throw new Error("id already exist")
        }
        objCollection.push(obj)
    })
};

export const getEntities = () => {
    return objCollection
};

export const getCount = () => {
    return objCollection.length
};

export const getEntityById = id => {
    if(typeof id !== 'number'){
        throw new Error('id is not number')
    }
    let res = objCollection.filter(o => id === o.id);
    return res.length === 0 ? null : res
};

export const getFirstEntity = () => {
    return objCollection.length === 0 ? null : objCollection[0]
};

export const getLastEntity = () => {
    return objCollection.length === 0 ? null : objCollection[objCollection.length - 1]
};

export const filter = calb => {
    if(typeof calb !== 'function'){
        throw new Error('calb is not function')
    }
    let res =  objCollection.filter(o => calb(o));
    return res.length === 0 ? null: res;
};



