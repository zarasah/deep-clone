const user = {
    name: 'Zara',
    age: 32,
    test: null,
    address: {
        country: 'Armenia',
        city: 'Yerevan',
        street: 'Aghababyan 29',
    },
    contact: {
        phone: {
            phone1: 123456789,
            phone2: 987654321,
        },
        email: {
            first: 'firts@email',
            second: 'second@email',
        }
    }
}

console.log('user: ',user);
// debugger;
const cloneUser = cloneObj(user);

console.log('cloneUser: ', cloneUser);

function cloneObj(obj) {
    const cloneUser = {};

    for (let key in obj) {
        if (typeof obj[key] !== 'object' || obj[key] === null) {
            cloneUser[key] = obj[key];
        } else {
            cloneUser[key] = cloneObj(obj[key]);
        }
    }
    return cloneUser;
}

user.name = 'Nelly';

console.log('Object user:', user.name);  //  Nelly
console.log('Object cloneUser:', cloneUser.name);  //  Zara