import './App.css';
import MyComponent2 from './components/MyComponent';
import OtherComponent from './components/OtherComponent';

function App() {
  return <div className="App">
    <MyComponent2/>
    <OtherComponent/>
    <MyComponent2/>
    <OtherComponent/>
    <MyComponent2/>
  </div>;
}

export default App;
