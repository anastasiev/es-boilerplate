
const objCollection = [];

export function addEntity(obj) {
    objCollection.push(obj);
}
export function getEntities() {
    return objCollection;
}
export function getCount() {
    return objCollection.length;
}
export function getEntityById(id) {
    return objCollection.filter(function (obj) {
        return obj.id == id;
    })
}
export function getFirstEntity() {
    return objCollection[0];
}
export function getLastEntity() {
    return objCollection[objCollection.length - 1];
}
export function filter(condFunc) {
    let res = [];
    objCollection.forEach(function (obj) {
        if(condFunc(obj)){
            res.push(obj);
        }
    });
    return res;
}
