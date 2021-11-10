import './emotionBox.css'

function EmotionBox(props) {
  return (
    <div id={props.id} className="emotionBox">
      <img src={props.imageUrl} alt={props.title} />
      <div className="emotionContent">
        <h1 className="title">
          {props.title}
        </h1>
        <p className="description">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default EmotionBox;
