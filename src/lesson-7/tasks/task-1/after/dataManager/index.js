'use strict';

export const DataManager = function () {

    this.people = new Set();

    this.getFirstEntity = function () {
        if(this.people.size === 0){
            return null;
        }
        return this.people.values().next().value;
    };

    this.getLastEntity = function () {
        if(this.people.size === 0){
            return null;
        }
        return [...this.people.values()].pop();
    };

    this.add = function (entity) {
        this.people.add(entity);
    };

    this.getEntities = function () {
        return [...this.people];
    };

    this.getCount = function () {
        return this.people.size;
    };

    this.getEntityById = function (id) {
        let res = null
        this.people.forEach(person => {
           if(person.id === id){
               res =  person;
               return;
           }
        });
        return res;
    };

    this.filter = function (filterFunc) {
        let res = [];
        this.people.forEach(person => {
            if(filterFunc(person)){
                res.push(person)
            }
        });
        return res.length === 0 ? null : res
    };

};

