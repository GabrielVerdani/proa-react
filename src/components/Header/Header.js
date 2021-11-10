import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as DropDownIcon } from '../../assets/dropDownIcon.svg';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Logo className="logo" />

      <div className="dropDownMenu">
        <h3>Minhas emoções <DropDownIcon /></h3>

        <div className="dropDownContent">
          <ul>
            <li><a href="#vergonha">Vergonha</a></li>
            <li><a href="#frustracao">Frustração</a></li>
            <li><a href="#confusao">Confuso</a></li>
            <li><a href="#curiosidade">Curiosidade</a></li>
            <li><a href="#orgulho">Orgulho</a></li>
            <li><a href="#esperanca">Esperança</a></li>
            <li><a href="#tranquilidade">Tranquilidade</a></li>
            <li><a href="#paz">Paz</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;