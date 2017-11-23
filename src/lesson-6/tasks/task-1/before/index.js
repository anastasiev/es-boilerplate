import {
    addEntity as add,
    getEntities,
    getEntitiesSortedByPopularity,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity,
    getEntityTotalviews,
    filter
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 21
        },
        {
            id: 2,
            title: 'youtube',
            views: 23
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const women = new Entity({
    id: 1,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 0
        },
        {
            id: 2,
            title: 'youtube',
            views: 0
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const programmer = new Entity({
    id: 2,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 999
        },
        {
            id: 2,
            title: 'youtube',
            views: 999
        },
        {
            id: 3,
            title: 'twitter',
            views: 999
        }
    ]
});

// Get data for man
const firstEntity = man.getEntity();
const secondEntity = women.getEntity();
const thirdEntity = programmer.getEntity();

// Add man to collection
add(firstEntity);
add(secondEntity);
add(thirdEntity);

const totalViews1 = getEntityTotalviews(firstEntity.id);
console.log(totalViews1); // 46

const totalViews2 = getEntityTotalviews(firstEntity.id, [1, 3]);
console.log(totalViews2); // 23

const totalViews3 = getEntityTotalviews(firstEntity.id, ['facebook', 'twitter']);
console.log(totalViews3); // 23

const totalViews4 = getEntityTotalviews(firstEntity.id, null, total => total * 3);
console.log(totalViews4); // 138

const entitiesSorted = getEntitiesSortedByPopularity();
console.log(JSON.stringify(entitiesSorted, null, 2));
