
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import './App.css';



function App() {

  return (
    <header>
      <div>
        <h1>IdCard</h1>
          <IdCard firstName="John" lastName="Doe" gender="male" height="178" birth="1992-07-14" img="https://randomuser.me/api/portraits/men/44.jpg" />
          <IdCard firstName="Delores" lastName="Obrien" gender="female" height="172" birth="1993-05-11" img="https://randomuser.me/api/portraits/women/44.jpg" />
        <h1>Greetings</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        <h1>Random</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        <h1>BoxColor</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
      </div>
    </header>
  );
}

export default App;
