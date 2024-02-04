export default function Card({title, description,priority,created_at, statusFlag}) {
  return (
    <div className="bg-pink-300 m-3 p-3">
        <div>{title}</div>
        <div>{description}</div>
        <div>{priority}</div>
        <div>{created_at}</div>
        <div>{statusFlag}</div>
    </div>
  )
}
