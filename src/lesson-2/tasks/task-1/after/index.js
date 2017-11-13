export function findString(text, pattern) {
    let res = 0;
    for(let i = 0; i < text.length - pattern.source.length; i++){
        pattern.lastIndex = i;
        if(text.match(pattern) != null){
            res++;
        }
    }
    return res;
}
