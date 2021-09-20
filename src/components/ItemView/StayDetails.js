import { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import PopUpGallery from './PopUpGallery';
import PopUpStays from './PopUpStays';
const StayDetails = ({ stayData }) => {
    const [popUpGallery, setPopUpGallery] = useState({
        switch:false,
        data:null
    })
    const [popUpStaysSwitch, setPopUpStaysSwitch] = useState({
        switch:false,
        data:null
    });
    return (
        <div className="stay-detail">
            <div 
                className="stay-detail-introduction"
                style={{backgroundImage:`linear-gradient(to top,rgba(65, 65, 65, 0), rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.616),rgba(0, 0, 0, 0.876)), url(${stayData.images[0]})`}}
            >
                <div className="stay-detail-introduction-data-container">
                    <div className="stay-detail-introduction-data">
                        <h2>{stayData.name}</h2>
                        <h3><HiLocationMarker color="#ffffff"/>{stayData.location}</h3>
                        <div>
                            <button onClick={()=>setPopUpGallery({ switch:true, data:stayData.images })}>GALLERY</button>
                        </div>

                    </div>
                </div>
                <div className="stay-detail-introduction-description-container">
                    <div className="stay-detail-introduction-description">
                        <h3>HOTEL DESCRIPTION</h3>
                        {
                            stayData.hotelDescription.map((item, index)=>(
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="room-type-container">
                <h2>ROOM TYPE</h2>
                <div className="room-type-list">
                        {
                            stayData.roomTypes.map((item, index)=> (
                                <div 
                                    key={index} 
                                    className="room-type-list-item"
                                    onClick={()=>setPopUpStaysSwitch({ switch:true,
                                        data:item })}
                                    >
                                    <div className="room-type-list-item__img"><img src={item.images[0]} alt={item.name}/></div>
                                    <h3>{item.name}</h3>
                                    
                                    
                                </div>
                            ))
                        }
                </div>
            </div>

            { 
            popUpStaysSwitch.switch &&  
            <PopUpStays 
                data={popUpStaysSwitch.data}
                setPopUpStaysSwitch={setPopUpStaysSwitch}
            />
            }

            { 
            popUpGallery.switch &&  
            <PopUpGallery 
                data={popUpGallery.data}
                setPopUpGallery={setPopUpGallery}
            />
            }


        </div>
    )
}

export default StayDetails
