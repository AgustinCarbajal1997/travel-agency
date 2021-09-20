import { useState, useRef } from 'react';
import { IoIosCloseCircleOutline, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const PopUpGallery = ({ data, setPopUpGallery }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [currentPlaceCarousel, setCurrentPlaceCarousel] = useState(0)
    const carouselTiny = useRef()
    const carouselTinySlide = useRef()
    
    const closePopUp = (e) => {
        if(e.target.classList.contains("popUpGallery-section")){
            setPopUpGallery({
                switch:false,
                data:null
            })
        } 
    }
    const onNextBigImageHandler = () => {
        if(currentImage<data.length-1){
            setCurrentImage(currentImage+1)
        }else{
            setCurrentImage(0)
        }
    }
    const onBackBigImageHandler = () => {
        if(currentImage===0){
            setCurrentImage(data.length-1)
        }else{
            setCurrentImage(currentImage-1)
        }
    }

    const onNextPlaceTinyCarousel = () => {
        if(currentPlaceCarousel + carouselTiny.current.clientWidth >= carouselTinySlide.current.clientWidth) return;
        if(carouselTiny.current.clientWidth*2 < carouselTinySlide.current.clientWidth){
            setCurrentPlaceCarousel(currentPlaceCarousel+carouselTiny.current.clientWidth)
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel + (carouselTinySlide.current.clientWidth-carouselTiny.current.clientWidth))
        }
        console.log(carouselTiny.current.clientWidth)
        console.log(carouselTinySlide.current.clientWidth)
        

    }
    const onBackPlaceTinyCarousel = () => {
        if(currentPlaceCarousel === 0) return;
        if(currentPlaceCarousel <= carouselTiny.current.clientWidth){
            setCurrentPlaceCarousel(0);  
        }else{
            setCurrentPlaceCarousel(currentPlaceCarousel - carouselTiny.current.clientWidth);
        } 

        console.log(carouselTiny.current.clientWidth)
        console.log(carouselTinySlide.current.clientWidth)
        

    }
    
    console.log(currentPlaceCarousel)

    return (
        <div className="popUpGallery-section" onClick={closePopUp}>
            <div 
                className="close-pop-up"
                onClick={()=>setPopUpGallery({
                    switch:false,
                    data:null}
                )}    
            >
                <IoIosCloseCircleOutline size="3rem" color="#ffffff"/>
            </div>

            <div  className="popUpGallery-container">
                <div className="popUpGallery-carousel-container">
                    <div className="popUpGallery-carousel__bigImg">
                        <img src={data[currentImage]} alt="big-img-gallery"/>
                        <div className="arrow-left-carousel-big-img" onClick={onBackBigImageHandler}>
                            <IoIosArrowBack size="3rem" color="#ffffff"/> 
                        </div>
                        <div className="arrow-right-carousel-big-img" onClick={onNextBigImageHandler}>
                            <IoIosArrowForward size="3rem" color="#ffffff"/>
                        </div>
                    </div>

                    <div 
                        className="popUpGallery-carousel-tinyImgs-container"
                        ref={carouselTiny}
                        >
                        <div 
                            ref={carouselTinySlide}
                            className="popUpGallery-carousel-tinyImgs"
                            style={{ 
                                width:`${120*data.length}px`,
                                left:`-${currentPlaceCarousel}px`
                            }}
                            >
                            { data.map((item, index) => (
                                <div key={index} className="popUpGallery-carousel-tinyImgs__item">
                                    <img 
                                        src={item} 
                                        alt={`tiny-img${index}`} 
                                        onClick={()=>setCurrentImage(index)}    
                                    />
                                </div>
                            )) }
                        </div>
                        <div className="arrow-left-small-carousel" onClick={onBackPlaceTinyCarousel}>
                            <IoIosArrowBack size="3rem" color="#ffffff"/> 
                        </div>
                        <div className="arrow-right-small-carousel" onClick={onNextPlaceTinyCarousel}>
                            <IoIosArrowForward size="3rem" color="#ffffff"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpGallery
