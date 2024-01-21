const CatCard = ({ data }) => {
    return ( 
        <li className="swiper-list-item">
            <img src={data.img} className="swiper-list-img" alt="cat" />
            <h3 className="swiper-list-title">{data.name}</h3>
        </li>
     );
}
 
export default CatCard;