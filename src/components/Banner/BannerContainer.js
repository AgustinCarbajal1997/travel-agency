import { useState, useEffect, useCallback } from "react";
import CarouselBannerListItem from "./CarouselBannerListItem";
import BannerListOptions from "./BannerListOptions";


const BannerContainer = () => {
    const [list, setList] = useState(BannerListOptions)
    const [order, setOrder] = useState(false);
    const [currentPlace, setCurrentPlace] = useState(null);


    
    const onNextSiblingHandler = useCallback(
        () => {
            setOrder(true);
            const filterItem = list[0];
            setCurrentPlace(list[0]);
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
        }, 7000);
        return () => {
            clearInterval(timeInterval)
        }
    }, [onNextSiblingHandler])

    useEffect(() => {
        if(!list)return;
        setCurrentPlace(list.at(-1))
    }, [list, setCurrentPlace])
    
    
    return (
        <> 

        { 
            list && currentPlace && <CarouselBannerListItem 
                list={list} 
                order={order}
                currentPlace={currentPlace}
                />
        }
                       
        </>
    )
}

export default BannerContainer
