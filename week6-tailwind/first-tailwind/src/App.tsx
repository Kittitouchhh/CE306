// import ProductCard from './components/wsProductCard'
import './App.css'
import Navbar from './components/Navbar'


// Workshop6-1

// function App() {

//   const handleAddtoCart = () => {
//     alert('Add to Cart')
//   }

//   return (
//     <div className="p-4 flex flex-wrap justify-center gap-6">
//       <ProductCard
//         imageUrl="/bw.jpg"
//         title="Adidas-Superstar Black"
//         description="รองเท้าผ้าใบไอคอนิกจาก Adidas สีดำแถบขาว"
//         price={95}
//         onAddtoCart={handleAddtoCart}
//       />
//       <ProductCard
//         imageUrl="/samba_white.jpg"
//         title="Adidas-Superstar White"
//         description="รองเท้าผ้าใบไอคอนิกจาก Adidas สีขาวแถบดำ"
//         price={95}
//         onAddtoCart={handleAddtoCart}
//       />
//       <ProductCard
//         imageUrl="/bp.jpg"
//         title="Backpacks - Adidas "
//         description="กระเป๋าสะพายลายสามแถบ"
//         price={100}
//         onAddtoCart={handleAddtoCart}
//       />
//     </div>
//   )
// }
// export default App;

// Workshop6.2

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-black text-left">เนื้อหาหลักของหน้าเว็บ</h1>
        <p className="text-gray-600 text-left">
          นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอ
          เพื่อดูการทำงานของ Responsive Navbar
        </p>
      </main>
    </>
  );
}

export default App

