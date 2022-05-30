const { cloneDeep } = require('loadash');

let firstObject = {
    name: 'Test Name',
    age: 29,
    coutriesLived: ['US', 'Canada', 'UK']
};

let secondObject = Object.create(firstObject);

