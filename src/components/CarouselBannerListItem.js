import CarouselBannerItem from "./CarouselBannerItem"

const CarouselBannerListItem = ({ list, order }) => {
    return (
        <> {
          list.map((item, index)=> (
          <CarouselBannerItem
            key={index}
            item={item} 
            index={index}
            order={order}
            />
          )
          )  
        }
            
        </>
    )
}

export default CarouselBannerListItem
