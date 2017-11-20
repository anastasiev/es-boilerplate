

export function Entity({id, firstName, surName, lastName, sex}) {
    this.id = id;
    this.firstName = firstName;
    this.surName = surName;
    this.lastName = lastName;
    this.sex = sex;
}

export const talk = {
    say () {
        console.log("Hello")
    },

    sayAge () {
        console.log(this.age)
    }
};

export const age = {

    fixAge (num) {
        this.age = num;
    }
};
