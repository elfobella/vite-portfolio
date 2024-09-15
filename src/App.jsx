import mySelf from "./assets/Portfolio-image.jpeg"

function App() {

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center min-h-screen">
      <div>
        <img src={mySelf} className="w-60 h-60 object-cover rounded-full" alt="" />
        <div>
          <h3 className="text-5xl font-bold">Yunus Emre UÇAR</h3>
          <h3 className="">FullStack Developer</h3>
        </div>
      </div>
    </div>
  )
}

export default App
