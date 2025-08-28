<<<<<<< HEAD
product = [
    {
        price : 100,
        discount : (10/100),
    },
    {
        price : 200,
        discount : (15/100), 
    },
    {
        price : 300,
        discount : (20/100),
    },
    {
        price : 400,
        discount : (25/100),
    },
    {
        price : 500,
        discount : (30/100),  
    },
    {
        price : 1000,
        discount : (30/100),  
    }
]

function calculateTotal(){
    product.forEach((product,index) => {
        console.log(`สินค้าที่ ${ index + 1 } ราคา : ${product.price} บาท ลด ${product.discount * 100} % แล้วเหลือราคา ${product.price - (product.price*product.discount)} บาท`)
    });
}
calculateTotal();
=======
product = {
    price : 100,
    discount : (10/100),
    price : 200,
    discount : (10/100),
    price : 300,
    discount : (10/100),
    price : 400,
    discount : (10/100),
    price : 500,
    discount : (10/100),
}

function calculateTotal(){
    
}
>>>>>>> d2732776eba594c973988dc40b401e693e6a17c4
