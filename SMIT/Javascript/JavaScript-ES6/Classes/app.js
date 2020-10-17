class Student {
    constructor(n,e){
        this.name = n;
        this.email = e;
    }
}
console.log(new Student("Syed","syed@gmail.com"));

class School extends Student{
    constructor(n,e,school){
        super(n,e)
            this.school = school;

    }
}
console.log(new School("Syed","syed@gmail.com","world"));