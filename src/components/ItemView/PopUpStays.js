import { useState } from 'react';
import { IoIosCloseCircleOutline, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const PopUpStays = ({ data, setPopUpStaysSwitch }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const closePopUp = (e) => {
        if(e.target.classList.contains("popUpStays-section")){
            setPopUpStaysSwitch({
                switch:false,
                data:null
            })
        } 
    }
    
    const onNextBigImageHandler = () => {
        console.log("hola mundo")
        if(currentImage<data.images.length-1){
            setCurrentImage(currentImage+1)
        }else{
            setCurrentImage(0)
        }
    }
    const onBackBigImageHandler = () => {
        if(currentImage===0){
            setCurrentImage(data.images.length-1)
        }else{
            setCurrentImage(currentImage-1)
        }
    }
    


    return (
        <div className="popUpStays-section" onClick={closePopUp}>
            <div 
                className="close-pop-up"
                onClick={()=>setPopUpStaysSwitch({
                    switch:false,
                    data:null}
                )}    
            >
                <IoIosCloseCircleOutline size="3rem" color="#ffffff"/>
            </div>

            <div  className="popUpStays-container">
                <div className="popUpStays-carousel-container">
                    <div className="popUpStays-carousel__bigImg">
                        <img src={data.images[currentImage]} alt={data.name}/>
                        <div className="arrow-left-carousel-big-img" onClick={onBackBigImageHandler}>
                            <IoIosArrowBack size="3rem" color="#ffffff"/> 
                        </div>
                        <div className="arrow-right-carousel-big-img" onClick={onNextBigImageHandler}>
                            <IoIosArrowForward size="3rem" color="#ffffff"/>
                        </div>
                    </div>
                    <div className="popUpStays-carousel-tinyImgs-container">
                        <div className="popUpStays-carousel-tinyImgs">
                            { data.images.map((item, index) => (
                                <div key={index} className="popUpStays-carousel-tinyImgs__item">
                                    <img 
                                        src={item} 
                                        alt={`tiny-img${index}`} 
                                        onClick={()=>setCurrentImage(index)}    
                                    />
                                </div>
                            )) }
                        </div>
                    </div>
                </div>

                <div className="popUpStays-information-container">
                    <h3>{data.name}</h3>
                    <h4>{data.roomDescription}</h4>
                    <h5>Room Facilities</h5>
                    <ul>
                        { data.roomFacilities.map((item, index)=>(
                            <li key={index}><p>{item}</p></li>
                            )) }

                    </ul>
                    <h5>Bathroom Facilities</h5>
                    <ul>
                        { data.bathRoomFacilities.map((item, index)=>(
                            <li key={index}><p>{item}</p></li>
                            )) }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PopUpStays
