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
<<<<<<< HEAD
    console.log(`นาย  ${student.name} ได้เกรด : ${student.grade}`);
})

function showStudentCount (){
    console.log("")
=======
    console.log(`นาย${student.name} ได้เกรด : ${student.grade}`);
})

function showStudentCount (){
>>>>>>> d2732776eba594c973988dc40b401e693e6a17c4
    console.log("จำนวนนักเรียน :" +" "+ student.length + " " + "คน")
}
showStudentCount()