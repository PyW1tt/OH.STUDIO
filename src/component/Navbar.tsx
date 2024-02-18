import { Link } from "react-router-dom"
import { useContext } from "react"
import { StatusNavContext } from "../App"

function Navbar() {
  const context = useContext(StatusNavContext)

  return (
    <nav className="p-1 bg-glass w-[300px] h-12 flex justify-between rounded-full fixed top-8 backdrop-blur-lg font-[Neue-book] text-sm z-50">
      <Link
        to={"/"}
        className={` px-5 py-[10px] w-[94px] rounded-full flex justify-center items-center  ${context.statusNav === "Home" && "bg-white"}`}
      >
        Home
      </Link>
      <Link
        to={"#"}
        className="  px-5 py-[10px] w-[94px] rounded-full flex justify-center items-center"
      >
        Profile
      </Link>
      <Link
        to={"/contact"}
        className={` px-5 py-[10px] w-[94px] rounded-full flex justify-center items-center ${context.statusNav === "Contact" && "bg-white"}`}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navbar
