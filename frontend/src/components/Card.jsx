import useDeleteItemRef from "../hooks/useDeleteItemRef"
export default function Card({id,title, description,priority,created_at, statusFlag}) {
  function handleDelete(key){
    useDeleteItemRef(key)
  }
  return (
    <div className="bg-pink-300 m-3 p-3">
        <div>{title}</div>
        <div>{description}</div>
        <div>{priority}</div>
        <div>{created_at}</div>
        <div>{statusFlag}</div>
        <button className="bg-red-500 rounded-md p-2" onClick={()=>handleDelete(id)}>delete</button>
    </div>
  )
} 
