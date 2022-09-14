export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={"./assets/img/" + props.name + ".svg"} />
      </div>
      <div className="usuario">{props.name}</div>
    </div>
  );
}