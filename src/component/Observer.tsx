import React, { useEffect, useRef } from "react"

interface ObserverProps {
  children: React.ReactNode
  value?: string
}

function Observer(props: ObserverProps) {
  const ref = useRef(null)

  useEffect(() => {
    let observerRefValue: HTMLElement | null = null

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn")
        }
      })
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
      observerRefValue = ref.current
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`fading-component ${props.value}`}>
      {props.children}
    </div>
  )
}

export default Observer
