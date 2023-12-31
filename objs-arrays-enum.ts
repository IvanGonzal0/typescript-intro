// const person: {
//     name: string,
//     age: number
// } = {
// const person: {
//     name:string,
//     age:number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 'ADMIN';
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role{
    ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'
}

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: any[];
favoriteActivities = ['Sports'];
let arrayOfNumbers: number[] = [1, 2, 3];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase());
}

if (person.role === Role.ADMIN){
    console.log('is admin');
}