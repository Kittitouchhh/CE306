import Card from "../components/card";
import { useState, useEffect } from "react";
import { SlActionUndo } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function Minigame() {
    const [number, setNumber] = useState<number[]>([]);
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const navigate = useNavigate();

    const cards = [...Array.from({ length: 9 }, (_, i) => i + 1), 0];

    useEffect(() => {
        generateRandom();
    }, []);

    const generateRandom = () => {
        const newRandom = Array.from({ length: 4 }, () =>
            Math.floor(Math.random() * 10)
        );
        setRandomNumbers(newRandom);
        console.log("สุ่มได้เลข:", newRandom.join(""));
    };

    const handleClick = (num: number) => {
        if (number.length >= 4) return;

        const updated = [...number, num];
        setNumber(updated);


        if (updated.length === 4) {
            setTimeout(() => {
            const isCorrect = updated.every((val, i) => val === randomNumbers[i]);

            if (isCorrect) {
                alert("ถูกต้อง! กำลังไปหน้าถัดไป...");
                navigate("/Home");
            } else {
                alert("ผิด! ลองใหม่อีกครั้ง");
                setNumber([]);
            }
          }, 200);
        }
    };

    const removeLastNumber = () => {
        setNumber((prev) => prev.slice(0, -1));
    };

    return (
        <>
            <div className="mb-5 text-[60px]">Welcome to my Web</div>
            <div className="m-auto text-white text-xl bg-black rounded w-20 text-center">
                {randomNumbers.join(" ")}
            </div>

            <div className="relative w-full flex justify-center mt-3">
                <div className="w-[500px] h-[50px] text-center text-3xl flex items-center justify-center border rounded">
                    {number.length > 0 ? number.join(" ") : "-"}
                </div>
            </div>

            <div className="rounded-xl m-5 w-[600px] justify-center flex flex-wrap gap-3 relative">
                {cards.map((num) => (
                    <Card
                        key={num}
                        image="/photo/gus.jpg"
                        numbers={num}
                        onClick={() => handleClick(num)}
                    />
                ))}
                <div
                    onClick={removeLastNumber}
                    className="absolute right-[calc(50%-350px)] top-1"
                >
                    <button className="h-13 w-20 ">
                        <SlActionUndo className="w-full h-8" />
                    </button>
                </div>
            </div>
        </>
    );
}
