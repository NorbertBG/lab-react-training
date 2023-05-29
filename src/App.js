
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

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
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h1>CreditCard</h1>
        <CreditCard bgColor="#11aa99" color="white" type="card-visa" num="8845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" />
        <CreditCard bgColor="#eeeeee" color="#222222" type="card-mastercard" num="0995" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" />
        <CreditCard bgColor="#ddbb55" color="white" type="card-visa" num="6984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" />
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h1>Rating</h1>
        <DriverCard img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" rating="4" name="Travis Kalanick" car={{model:"Toyota Corolla Altis", licensePlate:"CO42DE" }}/>
        <DriverCard img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" rating="5" name="Dara Khosrowshahi" car={{model:"Audi A3", licensePlate:"BE33ER" }}/>
      </div>
    </header>
  );
}

export default App;
