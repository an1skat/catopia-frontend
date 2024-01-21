import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutCats from "./pages/AboutCats";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPass from "./subpages/ForgotPass";
import ConfirmPass from "./subpages/ConfirmPass";
import ChangePass from "./subpages/ChangePass";
import AuthMe from "./subpages/AuthMe";
import CatopiaRedirect from "./utils/CatopiaRedirect";
import ScrollControl from "./utils/scrollControl";
import ScrollToTop from "./utils/scrollToTop";
import RedirectAfterAuth from "./subpages/RedirectAfterAuth";
import UserId from "./utils/Userid";

function App() {
  const location = useLocation();
  const id = UserId();

  const hide =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/confirm" ||
    location.pathname === "/change-password" ||
    location.pathname === "/auth/me" ||
    location.pathname === `/profile/${id}`;

  return (
    <div className="App">
      <ScrollToTop />
      {!hide && <Navbar />}
      <ScrollControl />

      <Routes>
        <Route path="/" element={<CatopiaRedirect />} />
        <Route path="/auth/me" element={<AuthMe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-cats" element={<AboutCats />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/confirm" element={<ConfirmPass />} />
        <Route path="/change-password" element={<ChangePass />} />
        <Route path={`/profile/${id}`} element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/redirect-after-auth" element={<RedirectAfterAuth />} />
      </Routes>

      {!hide && <Footer />}
    </div>
  );
}

export default App;
