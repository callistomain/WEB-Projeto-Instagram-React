export default function Post(props) {
  return (
    <div className="post">

      <div className="topo">
        <div className="usuario">
          <img src={"./assets/img/" + props.data.userName + ".svg"} />
          {props.data.userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div className="conteudo">
        <img src={"./assets/img/" + props.data.contentImgName + ".svg"} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline" />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <div>
            <ion-icon name="bookmark-outline" />
          </div>
        </div>

        <div className="curtidas">
          <img src={"./assets/img/" + props.data.likedUserName + ".svg"} />
          <div className="texto">
            Curtido por <strong>{props.data.likedUserName}</strong> e{" "}
            <strong>outras {props.data.likesAmount} pessoas</strong>
          </div>
        </div>
      </div>

    </div>
  );
}