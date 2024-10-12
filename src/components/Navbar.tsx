import { useContext } from "react";
import { ThemeContext } from "../context/context";

type Props = {
  handleThemeChange: () => void;
}

const Navbar = ({handleThemeChange}: Props) => {
  const theme = useContext(ThemeContext);
  console.log("change theme" ,  theme)

  return (
    <div className="fixed w-full top-0 bg-blue-100 ">
      <div className="flex justify-between max-w-[80vw] mx-auto items-center min-h-[5vw]">
        <a href="#about" className="flex text-2xl font-semibold">logo</a>
      <ul className="flex gap-20">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
     <button onClick={handleThemeChange}>Button</button>
     </div>
    </div>
  )
}

export default Navbar;