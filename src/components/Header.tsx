import Image from "next/image"
import icon from "../../public/imgs/icon.png"

const Header = () => {
  return (
    <header className="bg-[#0c1024]">
        <div className="flex items-center py-2 ">
        <Image className="cursor-pointer object-contain"
            src={icon}
            height = {50}
            width = {50}
            alt = "icon"
        />

        <h1 className="text-white text-2xl">Trailbuzz</h1>
        </div>
    </header>
  )
}

export default Header