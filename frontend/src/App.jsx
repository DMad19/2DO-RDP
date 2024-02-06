import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Form from './components/Form'
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
    </>
  )
}

export default App


