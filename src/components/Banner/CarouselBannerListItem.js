import { Link } from "react-router-dom"
import CarouselBannerItem from "./CarouselBannerItem"

const CarouselBannerListItem = ({ list, order, currentPlace }) => {
    return (
        <section className="banner-section"> 
        
          
            <img className="image-bg-place" src={currentPlace.fullImage} alt=""/>
            <div className="banner-title-place">
              <h3>{currentPlace.country}</h3>
              <h2>{currentPlace.place}</h2>
              <p>{currentPlace.description}</p>
              <Link to={`/${currentPlace.endPoint}`}><button>SEE MORE</button></Link>
            </div>
        
        


            
            <div className="carousel">
              <div className={`carousel-container ${order && `slide`}`}>
              {list.map((item, index)=> (
                <CarouselBannerItem
                  key={index}
                  item={item} 
                  index={index}
                  order={order}
                  />
                ))}
              </div>
            </div>
          
        </section>
    )
}

export default CarouselBannerListItem
