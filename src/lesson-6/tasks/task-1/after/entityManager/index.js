'use strict';
import validator from '../helpers'
const Entity = function (obj) {
    validator(obj);

    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.age = obj.age;
    this.sex = obj.sex;
    this.social = obj.social;

    this.getEntity = function () {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            sex: this.sex,
            social: this.social
        }
    }
};
export default Entity;
