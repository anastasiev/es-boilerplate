export default (l = 10, d = 1000, cb = (item) => item) => {
    if(typeof l !== 'number'){
        throw new Error('Not number');
    }
    if(typeof d !== 'number'){
        throw new Error('Not number');
    }
    if(typeof cb !== 'function'){
        throw new Error('Not function');
    }

    for(var i = 0; i < l; i++){
        (item =>
            setTimeout(() =>
                    console.log(cb(item)),
                d * item))(i);
    }


}
