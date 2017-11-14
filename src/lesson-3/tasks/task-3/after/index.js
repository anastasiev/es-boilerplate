

export default () => {
    let sum = 0;
    return (num = 0) => {
        if(typeof num !== "number"){
            throw new Error("Param is not number")
        }
        sum += num;
        return sum;
    }
}
