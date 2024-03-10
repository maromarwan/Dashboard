import Dashboard from "./components/Dashboard"
import Slider from "./components/Slider"

function App() {

  return (
    <>
      <div className="flex">
       <div className="basis-[12%] border">
          <Slider/>
       </div>
       <div className="basis-[88%]">
          <Dashboard/>
       </div>
      </div>
      
    </>
  )
}

export default App
