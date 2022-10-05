import Image from "next/image"
import icon from "../../public/imgs/icon.png"

const Header = () => {
  return (
    <header className="bg-[#0c1024]">
        <div className="flex items-center py-2">
        <Image className="cursor-pointer object-contain"
            src={icon}
            height = {50}
            width = {60}
            alt = "icon"
        />

        <h1 className="bg-gradient-to-r from-purple-400 via-white to-indigo-400 bg-clip-text text-transparent text-2xl font-extrabold">Trailbuzz</h1>
       
        <ul className="flex px-6 space-x-4">
            <li>Home</li>
            <li>Genre</li>
            <li>Watchlist</li>
        </ul>
        </div>
    </header>
  )
}

export default Header