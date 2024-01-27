import "../styles/main.css";
import "./styles/style.css";
export const MiniLoader = () => {
  return (
    <div className="loader">
      <div className="dot" id="dot1"></div>
      <div className="dot" id="dot2"></div>
      <div className="dot" id="dot3"></div>
    </div>
  );
};

export const MediumLoader = () => {
    return (
      <div className="loader">
        <div className="mdot" id="dot1"></div>
        <div className="mdot" id="dot2"></div>
        <div className="mdot" id="dot3"></div>
      </div>
    );
  };
