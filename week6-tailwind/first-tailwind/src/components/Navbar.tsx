import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="container  px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-xl font-bold text-blue-500 ">
                        logo
                    </div>

                    <div className="hidden md:flex space-x-6 font-bold">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Service</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-black hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <span className="text-2xl font-bold" >✕</span>
                            ) : (
                                <span className="text-2xl">☰</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
                    <a href="#" className="block text-gray-700 hover:text-blue-600 "
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600 "
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600 "
                        onClick={() => setIsOpen(false)}
                    >
                        Service
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-blue-600 "
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    )
}
export default Navbar


