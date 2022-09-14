import Story from "./Story";

export default function Stories() {
  const stories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
  
  return (
    <div className="stories">
      {stories.map(e => <Story name={e}/>)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle" />
      </div>
    </div>
  );
}