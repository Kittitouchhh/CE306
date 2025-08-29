student = [
    {
        name : "gus",
        grade : "A"
    },
    {
        name : "boss",
        grade : "A"
    },
    {
        name : "Tle son of Tum",
        grade : "F"
    }
]

student.forEach(function(student,index){
    console.log(`นาย  ${student.name} ได้เกรด : ${student.grade}`);
})

function showStudentCount (){
    console.log("")
    console.log(`นาย${student.name} ได้เกรด : ${student.grade}`);
}

function showStudentCount (){
    console.log("จำนวนนักเรียน :" +" "+ student.length + " " + "คน")
}
showStudentCount()
