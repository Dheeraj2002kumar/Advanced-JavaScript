const person = {
    name: "Tech_Coder",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Tech-Coder__"});
boundGreet();

// bind, call and apply are important method