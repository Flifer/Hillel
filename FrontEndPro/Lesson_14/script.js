class Group {
    #students = []
    
    addStudent(student) {
        if (student instanceof Student) {
            this.#students.push(student)
        }
    }
    getStudentsAmmount() {
        return this.#students.length
    }
    getAverageMark() {
        const marks = this.#students.reduce((acc, student) => {
            return acc.concat(student.marks)
        }, []);
        const sum = marks.reduce((acc, mark) => acc + mark);
          
        return sum / marks.length;
    }
}

class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));

console.log(group.getStudentsAmmount())

group.addStudent({});
console.log(group.getStudentsAmmount())

console.log(group.getAverageMark())

group.students = [new Student('John', [10, 10, 5, 10])];
console.log(group.getStudentsAmmount())