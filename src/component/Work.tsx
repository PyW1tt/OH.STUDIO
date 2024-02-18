import { Link } from "react-router-dom"
import Observer from "./Observer"
import { useEffect, useState } from "react"

interface WorkProps {
  size: string
}

function Work(props: React.PropsWithChildren<WorkProps>) {
  const [time1, setTime1] = useState(false)
  const [time2, setTime2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTime1(true)

      setTimeout(() => {
        setTime2(true)
      }, 100)
    }, 0)
  }, [])

  return (
    <div
      className={`text-center p-10 h-[455px] flex flex-col justify-center items-center font-medium ${props.size}`}
    >
      {time1 && (
        <Observer>
          <div>Let's work together</div>
        </Observer>
      )}
      {time2 && (
        <Observer>
          <Link to={"#"} className="text-[#7f7f7f] hover:opacity-50">
            Get in touch.
          </Link>
        </Observer>
      )}
    </div>
  )
}

export default Work
