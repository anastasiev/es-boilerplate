'use strict';

export const numberValidation = (num) => {
    if(typeof num !== "number"){
        throw new Error("Parameter is not a number");
    }
};

export const functionValidation = (func) => {
    if(typeof func !== "function"){
        throw new Error("Parameter is not a function");
    }
};
