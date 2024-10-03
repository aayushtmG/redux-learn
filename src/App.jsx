import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Status from "./Status"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/status" element={<Status></Status>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
