'use strict';
export default function ({firstName, lastName, age, sex, id}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
    this.id = id;

    this.getEntity = function () {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            sex: this.sex,
            id: this.id
        }
    }
}
