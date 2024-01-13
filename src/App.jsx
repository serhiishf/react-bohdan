import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return <div className="App">
    <PetInfo animal="cat" age="4" hasPet={true}/>
    <PetInfo animal="elephant" age="42" hasPet={false}/>
  </div>;
}

export default App;
