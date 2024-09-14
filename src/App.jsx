import Myself from "./assets/myself.jpeg"

function App() {

  return (
    <div className="flex items-center justify-center max-w-7xl min-h-screen mx-auto bg-red-50">
      <div>
        <div className="flex flex-col items-center gap-4 border-4 p-16 hover:bg-gray-300 cursor-pointer transition border-gray-800 rounded-lg">
          <img
            className="w-60 h-60 object-cover rounded-full"
            src={Myself}
            alt="asdad"
          />
          <div className="text-center">
            <span className="text-5xl font-extrabold">Yunus Emre Uçar</span>
            <p className="text-xl font-bold text-gray-700">FullStack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
