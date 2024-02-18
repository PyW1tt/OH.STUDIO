import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import "./App.css"
import React, { useState } from "react"

interface StatusNav {
  statusNav: string
  setStatusNav: (c: string) => void
}

export const StatusNavContext = React.createContext<StatusNav>({
  statusNav: "Home",
  setStatusNav: () => {},
})

function App() {
  const [statusNav, setStatusNav] = useState<string>("Home")

  return (
    <BrowserRouter>
      <StatusNavContext.Provider value={{ statusNav, setStatusNav }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StatusNavContext.Provider>
    </BrowserRouter>
  )
}

export default App
