import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import Auth from "./Auth";
import SearchBar from "./SearchBar";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <SearchBar />

        <div id="mainManue">
          <Link to="/">Home</Link>
          <Auth />
        </div>
      </nav>
    </header>
  );
};

export default Header;
