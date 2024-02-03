import Card from "./card";
import cardData from "../hooks/useGetCardData";
export default function Cards(){
    let cardDataArray =  cardData.tasks      
    let cards = cardDataArray.map((l)=>(
        <Card
            title={l.title}
            description={l.description} 
            priority= {l.priority}
            createdOn = {l.createdOn}
        />
    ))
    return (
        <div className="grid grid-flow-row grid-cols-2">
            {cards}
        </div>
    )
}