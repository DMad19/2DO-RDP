import React from 'react'


function Navbar({handleAddItem}) {
  return (
    <div className='flex flex-row justify-between items-center p-4 bg-blue-500'>
        <div>
            <div>LOGO</div>
        </div>
        <div>
            <div><button className='bg-green-400 p-2 rounded-md' onClick={handleAddItem}>ADD ITEM</button></div>
        </div>
    </div>
  )
}

export default Navbar