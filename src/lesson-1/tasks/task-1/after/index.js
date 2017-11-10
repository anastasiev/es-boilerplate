
export default function func(n, delay, callback) {
    for(let i = 0; i < n; i++) {
        setTimeout(function () {
            console.log(callback(i))
        }, delay * i);
    }
}
