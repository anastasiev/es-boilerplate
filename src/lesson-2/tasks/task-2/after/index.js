export function tag(literals, ...substitutions) {
    let res = '';
    for(let i = 0; i < substitutions.length; i++){
        res += `${literals[i]}${substitutions[i].amount}, and it will be paid in ${substitutions[i].currency}!`
    }
    res += literals[literals.length - 1];
    return res
}
