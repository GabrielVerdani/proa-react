import EmotionBox from "../EmotionBox/EmotionBox";
import heroImage from "../../assets/hero.png"

// EmotionBox Images
import confusao from "../../assets/confusao.jpg"
import curiosidade from "../../assets/curiosidade.jpg"
import esperanca from "../../assets/esperanca.jpg"
import frustracao from "../../assets/frustracao.jpg"
import orgulho from "../../assets/orgulho.jpg"
import tranquilidade from "../../assets/tranquilidade.jpg"
import vergonha from "../../assets/vergonha.jpg"
import paz from "../../assets/paz.png"

import './content.css'

function Content() {
  return (
    <div>
      <div className="intro">
        <div className="introText">
          <h1>Sobre Emoções</h1>
          <p>Emoções e sentimentos, sejam eles bons ou ruins, são muito importantes pois são o que compõe a nossa personalidade e o nosso jeito de ser.</p>

          <a href="#vergonha">Minhas principais emoções</a>
        </div>
        <img className="introImage" src={heroImage} alt="" />
      </div>
      <div className="emotions">
        <EmotionBox imageUrl={vergonha} title="Vergonha" id="vergonha" description="Por ser uma pessoa muito mais quieta, evitando ao máximo interações sociais, quando sou elogiado ou mencionado em público, a sensação de vergonha me aparece." />
        <EmotionBox imageUrl={frustracao} title="Frustração" id="frustracao" description="Apesar de ter bastante paciência e determinação, se eu não conseguir terminar algo que comecei, me sinto bastante frustrado e acabo nunca mais tocando naquele assunto novamente." />
        <EmotionBox imageUrl={confusao} title="Confusão" id="confusao" description="Diversos momentos eu me vejo confuso sobre o que eu sinto, o que eu quero para meu futuro, o que eu quero ser, de quem eu gosto, do que fazer... Confuso." />
        <EmotionBox imageUrl={curiosidade} title="Curiosidade" id="curiosidade" description="Sou bastante curioso, principalmente em relação à tecnologia. Sempre que vejo algo novo, ou algo que desconheço, busco ir atrás, nem que seja por alguns breves minutos." />
        <EmotionBox imageUrl={orgulho} title="Orgulho" id="orgulho" description="Apesar de me sentir frustrado ao não conseguir alguma coisa, quando consigo terminar algum projeto, me sinto bastante orgulhoso sobre aquilo. Estou bastante orgulhoso desse site, por exemplo." />
        <EmotionBox imageUrl={esperanca} title="Esperança" id="esperanca" description="Sou bastante esperançoso, sempre esperando que as coisas vão melhorar, de que tudo vai dar certo no final, de que no futuro eu vou saber o que fazer, no futuro vai me aparecer uma luz." />
        <EmotionBox imageUrl={tranquilidade} title="Tranquilidade" id="tranquilidade" description="Sou bem tranquilo, apesar de estar sempre confuso sobre meu futuro, vivo bem tranquilo, no meu canto, evitando ao máximo criar qualquer tipo de conflito." />
        <EmotionBox imageUrl={paz} title="Paz" id="paz" description="Vivo boa parte da minha vida em paz, na minha casa, às vezes conversando com amigos online, respeitando sempre o próximo e seus gostos, sendo uma pessoa bem tranquila." />
      </div>
    </div>
  )
}

export default Content;
