import AboutCatsCard from "../components/AboutCatsCard.jsx";
import { catData } from "../components/CatsInfo.jsx";
import { useParams } from "react-router-dom";
const AboutCatsCardPage = () => {
    const { catId } = useParams();
    const selectedCat = catData.find(cat => cat.url === catId);

    return <AboutCatsCard key={selectedCat.id} data={selectedCat} />;
}
 
export default AboutCatsCardPage;