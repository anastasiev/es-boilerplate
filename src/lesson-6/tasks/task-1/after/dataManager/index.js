'use strict';
import validator from '../helpers'

const people = [];

export const addEntity  = man => {
    validator(man);
    people.push(man)
};

export const getEntities = () => {
    return people;
}
export const getEntityById = id => {
    if(typeof id !== "number"){
        throw new Error("id is not number")
    }
    let res = people.filter(o => id === o.id);
    return res.length === 0 ? null : res[0]
};

export const getEntityTotalviews = (id, socialFilter, callback = total => total) => {
    const user = getEntityById(id);
    if(Array.isArray(socialFilter) && socialFilter.length === 0){
        throw Error("Array is empty")
    }
    const socials = user.social;
    if(typeof socialFilter === "undefined" || socialFilter === null){

        let total = socials.reduce((sum, {views: currViews} ) => sum + currViews, 0);
        return callback(total);
    }

    let total = 0;
    socialFilter.forEach(val =>{
        let res;
        if(typeof val === "number"){
            res = socials.filter(s => s.id === val);
        }else if(typeof val === "string"){
            res = socials.filter(s => s.title === val);
        }else {
            throw Error("Invalid array")
        }
        total += res
            .map(s => s.views)
            .reduce((prev, curr) => prev + curr);
    });

    return callback(total);


};

export const getEntitiesSortedByPopularity = () => {
    const copiedArray = people.slice();
    if(copiedArray.length <= 1){
        return copyArray;
    }

    const sortedPeople = copiedArray.sort((prev, next) => getEntityTotalviews(next.id) - getEntityTotalviews(prev.id));

    return sortedPeople;

};


