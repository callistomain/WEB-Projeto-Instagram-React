import { useState, useRef } from 'react';

export default function Post(props) {
  const [isMarked, setIsMarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const likesAmount = useRef(props.data.likesAmount);

  const bookmarkToggle = (e) => {
    e.target.setAttribute("name", isMarked ? "bookmark-outline" : "bookmark");
    setIsMarked(!isMarked);
  }

  const likeToggle = () => {
    likesAmount.current += (isLiked ? -1 : 1);
    setIsLiked(!isLiked);
  }

  const likeActivate = () => {
    if (isLiked) return;
    likesAmount.current += 1;
    setIsLiked(true);
  }

  return (
    <div className="post">

      <div className="topo">
        <div className="usuario">
          <img alt="" src={"./assets/img/" + props.data.userName + ".svg"} />
          {props.data.userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div className="conteudo" onDoubleClick={likeActivate}>
        <img alt="" src={"./assets/img/" + props.data.contentImgName + ".svg"} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {isLiked
              ? <ion-icon onClick={likeToggle} name="heart" style={{color:"red"}} />
              : <ion-icon onClick={likeToggle} name="heart-outline" />
            }
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <div onClick={bookmarkToggle}>
            <ion-icon name="bookmark-outline" />
          </div>
        </div>

        <div className="curtidas">
          <img alt="" src={"./assets/img/" + props.data.likedUserName + ".svg"} />
          <div className="texto">
            Curtido por <strong>{props.data.likedUserName}</strong> e{" "}
            <strong>outras {likesAmount.current.toLocaleString('en-US').replace(/,/g, '.')} pessoas</strong>
          </div>
        </div>
      </div>

    </div>
  );
}