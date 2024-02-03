export default function Card({title, description,priority,createdOn, statusFlag}) {
  return (
    <div className="bg-pink-300 m-3 p-3">
        <div>{title}</div>
        <div>{description}</div>
        <div>{priority}</div>
        <div>{createdOn}</div>
        <div>{statusFlag}</div>
    </div>
  )
}