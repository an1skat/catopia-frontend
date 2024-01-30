import AboutCatsCard from "../components/AboutCatsCard.js";
import { catData } from "../components/CatsInfo.js";
import { useParams } from "react-router-dom";
const AboutCatsCardPage = () => {
    const { catId } = useParams();
    const selectedCat = catData.find(cat => cat.url === catId);

    return <AboutCatsCard key={selectedCat.id} data={selectedCat} />;
}
 
export default AboutCatsCardPage;