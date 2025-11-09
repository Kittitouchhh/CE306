import Eueiea from "./eueiea"

export default function Profile(){
    return(
        <>
            <Eueiea/>
            <div className="bg-black mt-1 p-3">
                <p className="text-center font-bold ">ประวัติส่วนตัว</p>  
                <p className="text-center m-2 ml-5 ">ชื่อ : นายกิตติธัช สกุลศักดิ์พินิจ</p>
                <p className="text-center m-2 ml-5 ">ว/ด/ป เกิด : 17/ธ.ค./2547</p>
                <p className="text-center m-2 ml-5 ">ชื่อเล่น : กัส</p>
                <p className="text-center m-2 ml-5 ">ภาษาที่ถนัด : python,Html,Css,JavaScript</p>
            </div>
        </>
    )
}