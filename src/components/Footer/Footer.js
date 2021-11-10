import githubIcon from '../../assets/githubIcon.png'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      Criado por:<br />
      <a href="https://github.com/gabrielverdani" target="_blank"><img src={githubIcon} /> Gabriel Verdani</a>
    </div>
  )
}

export default Footer;
