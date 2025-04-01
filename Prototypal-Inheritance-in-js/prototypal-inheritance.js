function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
};

let Tech_Coder = new Person("Tech_Coder.");
Tech_Coder.greet();