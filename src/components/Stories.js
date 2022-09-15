import Story from "./Story";

export default function Stories() {
  const stories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
  
  return (
    <div className="stories">
      {stories.map((e, i) => <Story key={i} name={e}/>)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle" />
      </div>
    </div>
  );
}