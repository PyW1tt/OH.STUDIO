import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Navbar from "../component/Navbar"
import Work from "../component/Work"
import Footer from "../component/Footer"
import Observer from "../component/Observer"
import { StatusNavContext } from "../App"
import "animate.css"

interface CatData {
  id: string
  url: string
}

function HomePage() {
  const context = useContext(StatusNavContext)
  const [data, setData] = useState<CatData[]>([])
  const [time1, setTime1] = useState(false)
  const [time2, setTime2] = useState(false)
  const [time3, setTime3] = useState(false)
  const [time4, setTime4] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<unknown>(null)
  const [word, setWord] = useState<string>("")

  async function getData() {
    try {
      const result = await axios.get(import.meta.env.VITE_API_KEY)
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
    context.setStatusNav("Home")

    const updateTimesSequentially = () => {
      setTimeout(() => setTime1(true), 0)
      setTimeout(() => setTime2(true), 100)
      setTimeout(() => setTime3(true), 200)
      setTimeout(() => setTime4(true), 300)
    }

    updateTimesSequentially()
  }, [context])

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 max-md:px-5 py-[30px] tracking-tight">
      <Navbar />

      <div className="w-full h-[640px] max-xl:h-[421px] p-10 max-md:p-0 flex flex-col justify-center items-center text-center ">
        {time1 && (
          <Observer>
            <div className="text-7xl font-medium max-xl:text-5xl max-md:text-4xl leading-tight ">
              <br className="xl:hidden" />
              <br className="" />
              <br className="" />
              A brand and product <br className="max-md:hidden" />
              designer working with <br className="max-xl:hidden" />
              clients <br className="xl:hidden max-md:hidden" /> globally
            </div>
          </Observer>
        )}

        {time2 && (
          <Observer>
            <div className="mt-6 flex gap-x-3 items-center max-md:hidden text-sm font-[Neue-book]">
              <div>Expertise</div>
              <div className="bg-[#e8e5e480] rounded-full py-2 px-3">
                Branding
              </div>
              <div className="bg-[#e8e5e480] rounded-full py-2 px-3">
                Product
              </div>
              <div className="bg-[#e8e5e480] rounded-full py-2 px-3">
                Design Systems
              </div>
            </div>
          </Observer>
        )}
      </div>

      {time3 && (
        <Observer>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-md:gap-y-6 max-md:grid-cols-1 mt-32 hover:cursor-pointer ">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="aspect-[16/12] "
                  onMouseEnter={() => {
                    setHoveredItem(index)
                    setWord("In")
                  }}
                  onMouseLeave={() => {
                    setWord("Out")
                  }}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={item.url}
                      alt={item.id}
                      className="w-full h-full rounded-2xl backdrop-blur-md"
                    />

                    {hoveredItem === index && (
                      <div
                        className={`absolute top-0 w-full h-full bg-black/25 backdrop-blur-md rounded-2xl flex justify-between p-5 animate__animated animate__fade${word} animate__faster`}
                      >
                        <div className="text-white ">Cat {index + 1}</div>

                        <button
                          className={`bg-white rounded-full h-12 w-12 flex justify-center items-center animate__animated animate__fade${word}BottomLeft animate__faster`}
                        >
                          <img
                            src="../../icon/up-arrow.svg"
                            alt=""
                            className="rotate-45"
                          />
                        </button>
                      </div>
                    )}
                  </div>

                  <p className="md:hidden font-[Neue-book] relative">
                    Cat {index + 1}
                  </p>
                </div>
              )
            })}
          </div>
        </Observer>
      )}

      <Work size={"text-[38px] max-md:text-[30px] "} />
      <Footer />

      {time4 && (
        <Observer value={"fixed bottom-20 "}>
          <button className="bg-black text-white px-5 py-2 rounded-full font-[Neue-book] flex items-center translate-y-11">
            <img
              src="../../icon/asterisk.svg"
              alt="asterisk"
              className="w-4 h-4 "
            />
            <span>&nbsp; shop</span>
          </button>
        </Observer>
      )}
    </div>
  )
}

export default HomePage
