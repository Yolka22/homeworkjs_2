class Worker{
    constructor (name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    };

    getSalary = () => {
        return (this.rate * this.days);
    }
}

const worker = new Worker("Tom", "Nithud", 25.5, 14);

console.log(worker.getSalary());