import star from '../../assets/icons/star1.png';
import { Link, useParams } from 'react-router-dom';
const StayItem = ({ item }) => {
    const { place } = useParams()
    let numberOfStars = [];
    for (let i = 0; i < item.dataItem.stars; i++) {
      numberOfStars.push(star)  
    }
        

    return (
        <div className="item-stay">
            <Link to={`/${place}/${item.endPoint}`}>
                <div className="item-stay__tinyImage">
                    <img src={item.dataItem.images[1]} alt={item.dataItem.name}/>
                </div>
                <div className="item-stay__description">
                    { 
                        numberOfStars.map((item, index) => (
                        <img 
                            key={index} 
                            className="number-stars" 
                            src={item} 
                            alt="stars"
                        />
                        ))
                    }
                    <h2>{item.dataItem.name}</h2>
                </div>
            </Link>
        </div>
    )
}


export default StayItem
