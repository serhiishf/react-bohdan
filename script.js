const App = ({ initialButtonText, initialClassList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classelList, setclasselList] = React.useState(initialClassList);
  const onButtonCLick = () => {
    setButtonText('Hello from React');
    setclasselList('green-btn');
  };
  return (
    <div className="app">
      <button className={classelList} onClick={onButtonCLick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('react-app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me new" initialClassList="" />);
