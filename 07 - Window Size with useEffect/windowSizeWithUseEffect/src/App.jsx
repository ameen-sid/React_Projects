import { useState, useEffect } from "react"

const App = () => {

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    console.log("add event");
    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
      console.log("remove event");
    }
  })
  
  
  return (
    <div className='container'>
      <h2>Window Size</h2>
      <h4>{size} Pixels</h4>
    </div>
  )
}

export default App