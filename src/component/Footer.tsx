function Footer() {
  return (
    <footer className=" flex justify-between w-full mb-2 font-[Neue-book] text-sm max-md:flex-col max-md:items-center max-md:mb-16 ">
      <div className="flex items-center max-md:flex-col ">
        <img
          src="../../icon/asterisk black.svg"
          alt=""
          className="animate-spin"
        />

        <p>&nbsp; © Oli Harris 2023</p>
      </div>

      <div className="flex items-center">
        <a href="#" className="mr-3">
          Twitter
        </a>
        <a href="#" className="mr-3">
          Linkedin
        </a>
        <a href="#">Mail</a>
      </div>
    </footer>
  )
}

export default Footer
