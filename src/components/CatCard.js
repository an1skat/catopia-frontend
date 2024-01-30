import { Link } from "react-router-dom";
const CatCard = ({ data }) => {
  return (
    <li className="swiper-list-item">
      <Link to={`/about-cats/${data.url}`}>
        <img src={data.img} className="swiper-list-img" alt="cat" />
        <h3 className="swiper-list-title">{data.name}</h3>
      </Link>
    </li>
  );
};

export default CatCard;
