const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Micheal', lastName: 'Johnson' }
];

const fullNames = names.map(function(person) {
    return { fullName: '${person.firstName}  ${person.lastName}' };
});

console.log(fullNames);