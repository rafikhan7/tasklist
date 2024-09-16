import logo from '../assets/logo.png'

const Header = ({children, theme, setTheme}) => {
  return (
    <div>
        <span className='logo' >
            <img src={logo} alt='logo'/> 
        </span>
        <span>Task List</span>
        <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </span>
    </div>
  )
}
export default Header;