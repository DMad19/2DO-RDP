import Card from "./card";
import useGetCardData from "../hooks/useGetCardData";
export default function Cards(){
        const cardData = useGetCardData()     
        let cards =[]
        if(cardData!=null){
            cards = cardData.map((l)=>(
                <Card
                    title={l.title}
                    description={l.description} 
                    priority= {l.priority}
                    created_at = {l.created_at}
                    statusFlag={l.completed_status}
                />
            ))
        } 
    return (
        <div className="grid grid-flow-row grid-cols-2">
          {cards}  
        </div>
    )
}