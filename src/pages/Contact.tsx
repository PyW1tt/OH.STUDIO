import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Work from "../component/Work"
import { StatusNavContext } from "../App"
import { useContext, useEffect } from "react"

function Contact() {
  const context = useContext(StatusNavContext)

  useEffect(() => {
    context.setStatusNav("Contact")
  }, [context])

  return (
    <div className="h-screen flex flex-col justify-between items-center px-10 pt-60  max-md:pt-32 max-md:px-5 py-[30px] ">
      <Navbar />
      <Work size={"text-7xl max-xl:text-5xl max-md:text-4xl max-md:px-0"} />
      <Footer />
    </div>
  )
}

export default Contact
