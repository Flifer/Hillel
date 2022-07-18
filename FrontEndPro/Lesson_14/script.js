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