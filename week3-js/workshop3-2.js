const price = 200
const Discount = (10/100)                         //ส่วนลดปกติ 5%
const discountmorethangivehunred = (10/100)      //ส่วนลด 500  10% + 5%


const bill = price - (price*Discount)  //ราคาปกติ
const billmorethanfivehunred = price - (bill * discountmorethangivehunred) //ราคามากกว่า500

if (bill <= 0){
    console.log("price after Discount Percentage : 0 " )
}
else if (bill <= 500){
    console.log("price after Discount Percentage : " + (bill+50)  )
}
else if (bill > 500){
    console.log("price after Discount Percentage : " + bill )
}
