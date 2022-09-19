import { useState } from "react";

export default function Usuario() {
  const [userName, setUserName] = useState("Catana");
  const [urlAvatar, setUrlAvatar] = useState("./assets/img/catanacomics.svg");

  const changeName = () => {
    const name = prompt("Nome de usuário");
    if (name) setUserName(name);
  }

  const changeAvatar = () => {
    const url = prompt("Url da imagem");
    if (url) setUrlAvatar(url);
  }

  return (
    <div className="usuario">
      <img alt="" onClick={changeAvatar} src={urlAvatar} />
      <div className="texto">
        <strong>catanacomics</strong>
        <span onClick={changeName}> {userName} <ion-icon name="pencil" ></ion-icon> </span>
      </div>
    </div>
  );
}
