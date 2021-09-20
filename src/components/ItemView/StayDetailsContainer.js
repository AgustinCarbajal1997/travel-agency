import { useEffect, useState } from "react"
import { useParams } from "react-router";
import StayDetails from "./StayDetails";

const StayDetailsContainer = () => {
    const [stayData, setStayData] = useState(null);
    const { place, stay } = useParams();


    useEffect(() => {
        (async()=>{
            const response = await fetch(`https://travel-agency-fd6d9-default-rtdb.firebaseio.com/highlights/${place}/stays/${stay}/.json`);
            const data = await response.json();
            setStayData(data);
        })()
    }, [place,stay])
    console.log(stayData)
    return (
        <>
            { stayData && <StayDetails stayData={stayData}/> }
        </>
    )
}

export default StayDetailsContainer
