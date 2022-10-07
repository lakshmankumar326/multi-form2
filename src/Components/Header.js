import {
  BsArrowLeft,
  BsBell,
  BsQuestionCircle,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import {AiOutlineCaretDown} from "react-icons/ai";
import { useNavigate } from "react-router";
import { icons } from "react-icons";


export default function Header() {
  const history = useNavigate();
  return (
    <header className="header">
      <div className="header-info">
        <div className="left-arrow">
          <BsArrowLeft />
        </div>
        <div className="header-inter">
          <h3>Add Candidate</h3>
        </div>
      </div>
      <div className="user-info">
        <div className="question">
          <BsQuestionCircle />
        </div>
        <div className="bell">
          <BsBell />
        </div>
        <div className="fill">
        <BsFillPersonCheckFill />
        </div>
        <div className="user">
          <p className="User-name"><b>Syed Imran</b></p>
          <p className="company-name">Hire++ Admin</p>
        </div>
        <div className="fill">
        <AiOutlineCaretDown />
        </div>
      </div>
    </header>
  );
}
