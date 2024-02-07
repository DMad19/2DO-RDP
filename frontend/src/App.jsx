import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Form from './components/Form'
import useDeleteItemRef from './hooks/useDeleteItemRef'
function App() {
const [showForm,setShowForm]  = useState(false)
  const handleAddItem = () =>{
    setShowForm(true)
  }
  return (
    <>
      <Navbar handleAddItem={handleAddItem}/>
      <Cards/>
      {showForm && <Form setShowForm={setShowForm}/>}
      <button className='bg-red-600 rounded-md p-2 m-2' onClick={()=>useDeleteItemRef()}>Delete All</button>
    </>
  )
}

export default App


