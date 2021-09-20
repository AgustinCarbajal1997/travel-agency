import StayItem from "./StayItem"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

const ListingStays = ({ staysList, setListOfStays }) => {
    
    const onNextItem = () => {
        const firstItem = staysList[0];
        let filterItems = staysList.filter((item, index)=> index !== 0);
        filterItems = [...filterItems,firstItem];
        setListOfStays(filterItems)
    }

    return (
        <div className="listing-stays-container">
            <h2>Stays</h2>
            <div className="listing-stays">
                <div className="listing-stays-carousel">
                    { staysList.map((item, index) => <StayItem item={item} key={index}/>) }
                </div>
            </div>
            <div 
                onClick={onNextItem}
                className="button-right"
            >
                <IoArrowForwardCircleOutline color="#ffffff" size="4rem"/>
            </div>
            
            
            
                
            
                
                
            
            

        </div>
    )
}


export default ListingStays
