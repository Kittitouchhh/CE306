export default function Header() {
  return (
    <div className="w-full bg-[#181818] p-4 flex justify-center">
      <nav className="flex gap-8 text-white text-[15px] font-medium">
        <a href="/Home" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Home</a>
        <a href="/Profile" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Profile</a>
        <a href="https://github.com/Kittitouchhh" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Github</a>
        <a href="/Contact" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Contact</a>
      </nav>
    </div>
  );
}
