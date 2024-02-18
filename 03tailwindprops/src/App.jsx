
import './App.css'
import Card from './components/Card'
function App() {
  

  let arr = [1,2,3,4];
  return (
    <>
      <h1 className=' text-white p-6 border-4 border-slate-200  rounded-2xl my-4'> Tailwind Test</h1>
      <Card username="janak avhad" somearr = {arr}/>
      <Card/>
    </>

  )
}

export default App
