export default function Buttons(props) {
  return (
    <div className="cardContainer">
      <div className="cardEmoji">{props.emoji}</div>
      <h3 className="cardTitle">{props.head}</h3>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}
