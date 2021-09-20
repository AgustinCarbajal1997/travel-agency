import { useEffect, useState } from "react"
import ListingStays from "./ListingStays"

const PlaceItem = ({ dataPlace }) => {
    const [listOfStays, setListOfStays] = useState([])
    
    useEffect(() => {
        const staysList = Object.keys(dataPlace.stays).map(item =>{
            return { 
                endPoint:item,
                dataItem:dataPlace.stays[item]
            }
        })
        setListOfStays(staysList);
        
    }, [dataPlace])

            


    
    return (
        <div
            className="place-item"
            style={{backgroundImage:`linear-gradient(to top,rgba(65, 65, 65, 0), rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.616),rgba(0, 0, 0, 0.876)), url(${dataPlace.backgroundBannerImage})`}}
        >
            <div className="place-item-data">
                <h3>{dataPlace.country}</h3>
                <h2>{dataPlace.place}</h2>
                <p>{dataPlace.description}</p>
            </div>
            <ListingStays 
                staysList={listOfStays} 
                setListOfStays={setListOfStays}    
            />

        </div>
    )
}

export default PlaceItem
