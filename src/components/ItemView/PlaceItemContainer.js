import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PlaceItem from "./PlaceItem";
const PlaceItemContainer = () => {
    const { place } = useParams();
    const [dataPlace, setDataPlace] = useState(null);
    
    
    
    useEffect(() => {
        (async()=>{
            const response = await fetch(`https://travel-agency-fd6d9-default-rtdb.firebaseio.com/highlights/${place}/.json`);
            const data = await response.json();
            console.log(data);
            setDataPlace(data);
        })()    
    }, [place])


    return (
        <section className="place-section-container">
            { dataPlace && <PlaceItem dataPlace={dataPlace}/>}
        </section>
    )
}

export default PlaceItemContainer
