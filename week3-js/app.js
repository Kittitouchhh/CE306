// function testVar() {
//     var v = 10;
//     if (true){
//         var v = 20;
//         console.log(v);
//     }
//     console.log(v);
// }

// function testLet() {
//     let l = 10;
//     if (true){
//         let l = 20;
//         console.log(l)
//     }
//     console.log(l);
// }

// function testConst() {
//     const c = 10;
//     if (true){
//         let l = 20;
//         console.log(c)
//     }
//     console.log(c);
// }
// testVar();
// console.log();
// testLet();
// console.log();
// testConst();
// console.log();

// let a ="hello world"   //string
// let b = 100    //num
// let c = true   //boolean
// let d = null   //Null
// let e = {name:"Gus",age : 20} //Object
// let f = [1,2,3,4] //Array
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d) //null จะคืนค่าเป็น object เพราะเป็นบัคั้งเดิมของ js ไม่ไเเก้เพราะกลัว โค้ดเก่าพัง
// console.log(typeof e) 
// console.log(typeof f) //array = objet เพราะ array เป็น object แบบพิเศษ


// let age = 20;
// let Adult = (age >= 18) && (age < 60)
// let Child = (age < 18) || (age > 65)
// let notAdult = !Adult 
// console.log("Adult:",Adult)
// console.log("Child:",Child)
// console.log("notAdult:",notAdult)



// let score = 80;
// let grade = (score >= 80 ) ? "A" : "B" ; //ถ้าไม่เป็นจริงจะเข้ากรณีหลัง
// console.log("grade",grade);

// const day = 7;
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wendsday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default: console.log("number day fault")
// }

// const letter  = 'q';
// switch(letter.toLowerCase()){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('เป็นสระ');
//         break;
//     default:
//         console.log('ไม่ใช่สระ')    
// }

// let j = 1;
// while (j <= 5){
//     console.log("hello loop")
//     j++
// }

// let fruits = ["a","b","c"];
// for (let i = 0; i < fruits.length; i++){
//     console.log(`Fruits ${i+1} : ${fruits[i]}`)
// }

// let fruitz = ["a","b","c"];
// fruitz.forEach(function(fruit,index){
//     console.log(`Fruit ${index + 1}: ${fruit}`);
// })