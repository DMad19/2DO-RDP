import {useRef} from 'react'
import useAddItemRef from '../hooks/useAddItemRef';

function Form({setShowForm}) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const priorityRef = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault()
        useAddItemRef(titleRef.current.value,descRef.current.value,priorityRef.current.value)
        .then(response => {
          console.log('Response from API:', response);
          setShowForm(false)
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" ref={titleRef}/><br />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" ref={descRef}/><br />
        <label htmlFor="priority">Priority:</label>
        <select name='priotity' id='priority' ref={priorityRef}>
          <option value="LOW">LOW</option>
          <option value="MED">MID</option>
          <option value="HIGH">HIGH</option>
        </select><br />
        <button type="submit" className='bg-green-500 rounded-md p-2'>submit</button>
    </form>
  )
}

export default Form