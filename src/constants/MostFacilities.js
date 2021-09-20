import { MdPool, MdSpa } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { TiGroup } from 'react-icons/ti';
import { FaPaw, FaWifi, FaCoffee } from 'react-icons/fa';
import { IoRestaurantSharp } from 'react-icons/io5';

const MOST_FACILITIES = {
    swimmingPool:[<MdPool color="#ffffff" size="2rem"/>, "1 swimming pool"],
    parking:[<AiFillCar color="#ffffff" size="2rem"/>, "Parking"],
    spa:[<MdSpa color="#ffffff" size="2rem"/>, "Spa and wellness centre"],
    family:[<TiGroup color="#ffffff" size="2rem"/>, "Family rooms"],
    pets:[<FaPaw color="#ffffff" size="2rem"/>, "Pets allowed"],
    wifi:[<FaWifi color="#ffffff" size="2rem"/>, "WiFi"],
    coffe:[<FaCoffee color="#ffffff" size="2rem"/>, "Tea/coffee maker in all rooms"],
    bar:[<IoRestaurantSharp color="#ffffff" size="2rem"/>, "Bar/Restaurant"]

}

export default MOST_FACILITIES;