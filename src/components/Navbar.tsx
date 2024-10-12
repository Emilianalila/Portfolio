import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Link } from "react-scroll";

type Props = {
  handleThemeChange: () => void;
}

const Navbar = ({handleThemeChange}: Props) => {
  const theme = useContext(ThemeContext);
  console.log("change theme" ,  theme)

  return (
    <div className="fixed w-full top-0 bg-blue-100 z-40"> {/* z-index el mayor valor es el que predomina, por lo tanto tengo que tener el z index de mi navbar muy alto  */}
      <div className="flex justify-between max-w-[80vw] mx-auto items-center min-h-[5vh]">
        <Link to={"home"} smooth className="flex text-xl font-semibold cursor-pointer">
        logo
        </Link>
      <ul className="flex gap-20">
        <li><Link to={"home"} smooth className="flex text-xl font-semibold cursor-pointer">Home</Link></li>
        <li><Link to={"about"} smooth className="flex text-xl font-semibold cursor-pointer">About</Link></li>
        <li> <Link to={"projects"} smooth className="flex text-xl font-semibold cursor-pointer">Projects</Link></li>
      </ul>
     <button onClick={handleThemeChange}>Button</button>
     </div>
    </div>
  )
}

export default Navbar;