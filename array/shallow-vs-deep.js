
let userInfo = {
    name: 'Test Name',
    age: 29,
    coutriesLived: ['US', 'Canada', 'UK']
};

// Refrence Copy

// let refrenceObject = userInfo;


// refrenceObject.age = 35;

// console.log('Refrence Object -->', refrenceObject);
// console.log('User Info Object -->', userInfo);

// console.log('Check if both object have same refrence', Object.is(userInfo, refrenceObject));


// Shallow Copy

let shallowCopy = Object.assign({}, userInfo);

shallowCopy.age = 35;
shallowCopy.coutriesLived[2] = "INDIA";

console.log('Shallow Copy Object -->', shallowCopy);
console.log('User Info Object -->', userInfo);

console.log('Check if both object have same refrence', Object.is(userInfo, shallowCopy));



// Deep Copy 

// let deepCopy = JSON.parse(JSON.stringify(userInfo));

// deepCopy.age = 35
// deepCopy.coutriesLived[2] = "INDIA";


// console.log('Deep Copy Object -->', deepCopy);
// console.log('User Info Object -->', userInfo);

// console.log('Check if both object have same refrence', Object.is(userInfo, deepCopy));

