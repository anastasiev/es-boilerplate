

export function format(symb) {
    return '\\' + symb.charCodeAt(0).toString(16) + '\\' + symb.charCodeAt(1).toString(16);
}
