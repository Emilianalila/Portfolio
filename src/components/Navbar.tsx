import { useContext } from "react";
import "./navbar.css"
import { ThemeContext } from "../context/context";

type Props = {
  handleThemeChange: () => void;
}

const Navbar = ({handleThemeChange}: Props) => {
  const theme= useContext(ThemeContext);
  console.log("change theme" ,  theme)

  return (
    <div className="navbar-container">
      <div>
        <a href="#about">logo</a>
      </div>
      <li>

      </li>
     <button onClick={handleThemeChange}>Button</button>
    </div>
  )
}

export default Navbar;