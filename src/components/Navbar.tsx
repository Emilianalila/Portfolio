import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-scroll";
import ThemeToggler from "./theme-toggler/Theme-toggler";

type Props = {
  handleThemeChange: () => void;
}

const Navbar = ({handleThemeChange}: Props) => {
  const theme = useContext(ThemeContext);
  console.log("change theme" , theme)

  return (
    <div className={`${theme} fixed w-full bg-primary top-0 z-40 `}  > {/* z-index el mayor valor es el que predomina, por lo tanto tengo que tener el z index de mi navbar muy alto  */}
      <div className="wrapper flex justify-between items-center min-h-[7vh]">
        <Link to={"home"} smooth className="flex text-xl font-semibold cursor-pointer">
        logo
        </Link>
      <ul className="flex gap-20">
        <li><Link to={"home"} smooth className="flex text-xl font-semibold cursor-pointer">Home</Link></li>
        <li><Link to={"about"} smooth className="flex text-xl font-semibold cursor-pointer">About</Link></li>
        <li> <Link to={"projects"} smooth className="flex text-xl font-semibold cursor-pointer">Projects</Link></li>{/* TODO: refactor, create component and map */}
      </ul>
     <ThemeToggler handleThemeChange={handleThemeChange}/>
     </div>
    </div>
  )
}

export default Navbar;