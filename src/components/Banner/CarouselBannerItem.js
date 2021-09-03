const CarouselBannerItem = ({ item, index, order }) => {
  return (
    <>
      <div
        key={index}
        className={`carousel-item ${index === 0 && order && `hidden`}`}
      >
        <img src={item.tinyImage} alt={index} />
      </div>
    </>
  );
};

export default CarouselBannerItem;
