import ReactDOM from 'react-dom';
import Corpo from './components/Corpo';
import Mobile from './components/Mobile';
import NavBar from './components/NavBar';
const root = document.getElementById('root');

function App() {
  return (
    <div>
      <NavBar/>
      <Corpo/>
      <Mobile/>
    </div>
  );
}

ReactDOM.render(<App />, root);
