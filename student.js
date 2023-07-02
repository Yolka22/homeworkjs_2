class User{
    constructor (name, surname){

        this.name = name;
        this.surname = surname;

    }

    getFullName = () =>{

        return this.name + " " + this.surname;

    }
}

class Student extends User{

    constructor(name,surname, year) {

        super(name,surname);
        this.year = year;

      }

      getCourse = () =>{

        return  new Date().getFullYear() - this.year;
        
      }
    }

const student = new Student("Jim", "Harithon", 2022);

console.log(student.getFullName());
console.log(student.getCourse());