import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
      <h1 className='text-3xl text-center font-["Neue_Montreal"] pt-2 font-semibold'>Background Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2 font-["Neue_Montreal"]'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-full px-2 py-2'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-6 py-2 
          rounded-full text-white shadow-xl bg-red-600 hover:bg-red-400'>
            Red
          </button>
          <button
          onClick={() => setColor("green")}
          className='outline-none px-6 py-2 
          rounded-full text-white shadow-xl bg-green-600 hover:bg-green-400'>
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
          className='outline-none px-6 py-2 
          rounded-full text-white shadow-xl bg-blue-600 hover:bg-blue-400'>
            Blue
          </button>
          <button
          onClick={() => setColor("pink")}
          className='outline-none px-6 py-2 
          rounded-full text-white shadow-xl bg-pink-600 hover:bg-pink-400'>
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
