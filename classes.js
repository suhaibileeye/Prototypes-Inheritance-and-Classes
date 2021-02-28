// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.


class Person {
    constructor(familyMember){
        this.name = familyMember.name;
        this.Age = familyMember.Age;
        this.Hobby = familyMember.Hobby;
    }

    Speak (){
        return `Asc, magacaygu wa ${this.name} sido kale da'daydu waa  ${this.Age } Waxaan jecelahay ${this.Hobby}`
    }
}

class Child extends Person{
    constructor(children){
        super(children)

    }
}


const dad = new Person ({
    name:'Xamda Ali',
    Age:20, 
    Hobby:"inan noqdo dhakhtar"
});

const FirstSon = new Child ({
    name:'Xasan Maxamed',
    Age: 11, 
    Hobby:"inan noqdo madaxwayne"
});

const secondSon = new Child ({
    name:'Abdilahi Mouse',
    Age:15, 
    Hobby:"inaan noqdo duuliye"
});
const firstDaughter = new Child ({
    name:'Mukhtaar',
    Age: 13, 
    Hobby:"inan noqdo taajir"
});






console.log(dad.Speak());
console.log(FirstSon.Speak());
console.log(secondSon.Speak());
console.log(firstDaughter.Speak());