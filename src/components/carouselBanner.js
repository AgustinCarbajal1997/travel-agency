import { useState, useEffect, useCallback } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
const CarouselBanner = () => {
    const [list, setList] = useState([image1,image2,image3,image4,image1,image2,image3,image4])
    const [order, setOrder] = useState(false)
    


    
    const onNextSiblingHandler = useCallback(
        () => {
            setOrder(true);
            const filterItem = list[0];
            const leftItems = list.filter((item,index)=>index !== 0);
            const newArray = [...leftItems, filterItem];
            setTimeout(() => {
                setOrder(false)
                setList(newArray)
            }, 500);
        },
        [list],
    )    
       
    useEffect(() => {
        const timeInterval = setInterval(() => {
            onNextSiblingHandler()
        }, 5000);
        return () => {
            clearInterval(timeInterval)
        }
    }, [onNextSiblingHandler])

    


    return (
        <>
        <div className="carousel">
            <div className={`carousel-container ${order && `slide`}`}>
                { list.map((item,index)=>(
                    <div 
                        key={index} 
                        className={`carousel-item ${index === 0 && order && `hidden`}`}>
                        <img src={item} alt={index}/>
                    </div>
                )) }

            </div>
            
        </div>
        <div>
                <button onClick={onNextSiblingHandler}>Adelante</button>
        </div>
    </>
    )
}

export default CarouselBanner
