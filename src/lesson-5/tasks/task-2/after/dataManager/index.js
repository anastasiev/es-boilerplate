'use strict';
import validator from '../helpers'

export const DataManager = function () {
    this.objCollection = [];

    this.add = (...objects) =>{
        objects.forEach(obj => {
            validator(obj);
            if (this.objCollection.filter(o => obj.id === o.id).length > 0) {
                throw new Error("id already exist")
            }
            this.objCollection.push(obj)
        })
    };

    this.getEntities = () => {
        return this.objCollection;
    };

    this.getCount = () => {
        return this.objCollection.length
    };

    this.getEntityById = id => {
        if(typeof id !== 'number'){
            throw new Error('id is not number')
        }
        let res = this.objCollection.filter(o => id === o.id);
        return res.length === 0 ? null : res
    };

    this.getFirstEntity = () => {
        return this.objCollection.length === 0 ? null : this.objCollection[0]
    };

    this.getLastEntity = () => {
        return this.objCollection.length === 0 ? null : this.objCollection[this.objCollection.length - 1]
    };

    this.filter = calb => {
        if(typeof calb !== 'function'){
            throw new Error('calb is not function')
        }
        let res =  this.objCollection.filter(o => calb(o));
        return res.length === 0 ? null: res;
    };

};



