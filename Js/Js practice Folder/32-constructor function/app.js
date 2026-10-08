function User(username,age,skill){
     this.username=username,
     this.age=age,
     this.skill=skill
     this.greeting=function greet() {
        console.log(`welcome ${this.username}`);
        
     }
     
}

let user_1=new User("ayan",12,"Frontend")
let user_2=new User("Shaghil",20,"Backend")

console.log(user_1);
console.log(user_2.greeting());
