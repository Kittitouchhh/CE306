student = [
    {
        name : "Gus",
        score : 100,
        levelofbrain : "Radiant"
    },
    {
        name : "Boss",
        score : 101,
        levelofbrain : "Bug"
    },
    {
        name : "Ford",
        score : 89,
        levelofbrain : "Immortal"
    },
    {
        name : "pooh",
        score : 91,
        levelofbrain : "Ascendant"
    },
    {
        name : "Tee",
        score : 10,
        levelofbrain : "silver noob"
    },
    {
        name : "Tle son of Tum",
        score : 0,
        levelofbrain : "Bronze Wet Brain shit"
    },
]
function filterPassedStudents(lowscore){
    student.forEach((student , index) => {
        if (student.score >= lowscore){
            console.log(`นักเรียนคนที่ ${index +1 }  ${student.name} ผ่านด้วยคะแนน ${student.score} ด้วยระดับมันสมองที่ ${student.levelofbrain} `)
            console.log("")
        }
    });
}

filterPassedStudents(0)