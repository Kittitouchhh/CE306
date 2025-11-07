interface CardProps {
  image: string;
  numbers: string | number;
  onClick: () => void;
}

export default function Card({ image, numbers, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-40 h-40 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-110 transition duration-300"
    >
      <img className="shadow-2xl object-cover w-full h-full" src={image} alt="card" />
      <div className="text-2xl mt-2">{numbers}</div>
    </div>
  );
}
