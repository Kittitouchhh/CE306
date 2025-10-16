{/* สร้างข้อมูล แบบ.map 1สร้าง object มาเก็บ 2 สร้างฟังชันมารีเทิน เเล้วลิงค์ด้วย ชื่อ Const A   =>  {A.map((p) =>(สิ่งที่จะเเสดง หรือก็คือ ตกเเต่ง div))} */}
import { Link } from "react-router-dom"

const mockProducts = [
    { id: 1, name: "T-Shirt" },
    { id: 2, name: "Jeans" },
    { id: 3, name: "Jacket" }
];

export default function ProductListPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <ul className="space-y-2">
                {mockProducts.map((p) => (
                    <li
                        key={p.id}
                        className="p-3 bg-white rounded shadow hover:bg-gray-500 transition"
                    >
                        <Link to={`/products/${p.id}`} className="text-blue-600 hover:underline">{p.name} </Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}