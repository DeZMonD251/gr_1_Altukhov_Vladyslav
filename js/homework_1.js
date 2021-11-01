function createNewPerson(name, age, gender) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.greeting = function() {
      alert('Hi, I\'m'+ this.name +'. I am ' + this.age + ' years old. I\'m a ' + this.gender + '.');
    };
    return obj;
}
const Vlad = createNewPerson('Vlad', 20, 'male');
Vlad.greeting();