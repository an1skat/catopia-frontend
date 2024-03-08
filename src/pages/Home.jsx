import {
  MuteSvg,
  HeartSvg,
  VetSvg,
  HouseSvg,
  OneSvg,
  TwoSvg,
  ThreeSvg,
} from "../components/Svg.jsx";
import cats from "../img/cats-svg.jpg";
import "../styles/main.css"

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to world of cats!</h1>
          <p className="hero-text">
            According to many people, cats are the best pets. Not a day <br />
            goes by without someone posting or watching a video with <br />
            these cuties. We’ve created a platform for you to fully immerse
            <br /> yourself in the world of cats
          </p>
        </div>
      </section>
      <section className="why-cats-section">
        <div className="container">
          <h2 className="why-cats-title">Why cats?</h2>
          <ul className="why-cats-list list">
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <MuteSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">They are quiet</h3>
                <p className="why-cats-list-text">(nearly always)</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <HeartSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">Cats are good</h3>
                <p className="why-cats-list-text">for your healthy</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <VetSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">They have</h3>
                <p className="why-cats-list-text">a long lifespan</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <HouseSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">You don’t need</h3>
                <p className="why-cats-list-text">to walk them</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="did-you-know-section">
        <div className="container">
          <img src={cats} alt="cats" />
          <div className="did-you-know-container">
            <h2 className="did-you-know-title">Did you know?</h2>
            <p className="did-you-know-text">
              Studies have shown that cats have a calming effect on their
              owners, from the soothing action of petting to purring being an
              aid in falling asleep
              <br />
              <br />
              <span className="did-you-know-span">
                Cats can even play a part in lowering your blood pressure and
                risk of a heart attack. One 10-year study has even shown that
                cat owners were 30% less likely to die of a heart attack or
                stroke than non-cat owners
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="how-it-works-title">
            BEGIN YOUR JOURNEY IN THREE STEPS
          </h2>
          <ul className="how-it-works-list list">
            <li className="how-it-works-item">
              <div className="list-item-number">
                <OneSvg />
              </div>
              <p className="how-it-works-text">
                First of all, familiarize yourself with the
                website navigation
              </p>
            </li>
            <li className="how-it-works-item">
              <div className="list-item-number">
                <TwoSvg />
              </div>
              <p className="how-it-works-text">
                Next, register. It <br /> won't take much <br /> time.
              </p>
            </li>
            <li className="how-it-works-item">
              <div className="list-item-number">
                <ThreeSvg />
              </div>
              <p className="how-it-works-text">
                Congratulations! <br /> Enjoy your time <br /> here:)
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
