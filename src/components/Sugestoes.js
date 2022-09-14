import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoes = [
    {userName: "bad.vibes.memes", status: "Segue você"},
    {userName: "chibirdart", status: "Segue você"},
    {userName: "razoesparaacreditar", status: "Novo no Instagram"},
    {userName: "adorable_animals", status: "Segue você"},
    {userName: "smallcutecats", status: "Segue você"}
  ];

  return (
    <div className="sugestoes">
      <div className="titulo"> Sugestões para você <div>Ver tudo</div> </div>
      {sugestoes.map(e => <Sugestao data={e}/>)}
    </div>
  );
}