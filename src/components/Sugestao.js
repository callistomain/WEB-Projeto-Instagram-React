export default function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img alt="" src={"assets/img/" + props.data.userName + ".svg"} />
        <div className="texto">
          <div className="nome">{props.data.userName}</div>
          <div className="razao">{props.data.status}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}