import "./theme-toggler.css";

type Props = {
  handleThemeChange: () => void;
};

const ThemeToggler = ({ handleThemeChange }: Props) => {
  return (
    <div>
      <label id="switch" className="switch">
        <input type="checkbox" onChange={handleThemeChange} id="slider" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggler;