import { useContext } from "react";
import { ThemeContext } from "../context/context";

type Props = {
  handleThemeChange: () => void;
}

const Navbar = ({handleThemeChange}: Props) => {
  const theme = useContext(ThemeContext);
  console.log("change theme" ,  theme)

  return (
    <div className="fixed w-full bg-red-700 top-0">
      <div>
        <a href="#about">logo</a>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
     <button onClick={handleThemeChange}>Button</button>
    </div>
  )
}

export default Navbar;