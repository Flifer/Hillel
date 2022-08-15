const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9]
    }
  ]

averageStudentMark(Number(prompt('Choose student`s id')));

averageGroupMark(students);

function averageStudentMark(Num) {
    let student = students.find(student => student.id === Num)
        const markSum = student.marks.reduce((acc, curent) => acc + curent);
    let averageMark = markSum / student.marks.length
return alert(`average mark of the student ${student.name} is ${averageMark}`)
}

function averageGroupMark(arr) {
    let averageMarksArray = []
      for (let i = 0; i < arr.length; i++) {
        averageMarksArray.push(
        arr[i].marks.reduce((acc, curent) => acc + curent) / arr[i].marks.length)
      }
    let GroupMark = averageMarksArray.reduce((acc, curent) => acc + curent) / averageMarksArray.length
return alert(`average mark of the group is ${GroupMark}`)
}