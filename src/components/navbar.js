import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const menoShow = () => {
    const menuList = document.getElementById("meno-list");
    const menoBar = document.getElementById("meno-icon");
    const crossIcon = document.getElementById("cross-icon");
    menuList.classList.remove("hide-list");
    menoBar.classList.add("meno-hide");
    crossIcon.classList.remove("cross-hide");
  };
  const menoHide = () => {
    const menuList = document.getElementById("meno-list");
    const menoBar = document.getElementById("meno-icon");
    const crossIcon = document.getElementById("cross-icon");
    menuList.classList.add("hide-list");
    menoBar.classList.remove("meno-hide");
    crossIcon.classList.add("cross-hide");
  };
  return (
    <div className="navbar">
      <img src="./icon/portfolio.png" alt="" height="40px" width="40px" />
      <h2>Portfolio</h2>
      <ul id="meno-list" class="meno-dispay hide-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div class="meno-bar">
        <MdMenu id="meno-icon" onClick={menoShow} />
        <FaXmark className="cross-hide" id="cross-icon" onClick={menoHide} />
      </div>
    </div>
  );
}
export default Navbar;
