const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const onButtonCLick = () => {
    buttonText = 'Hello from React';
    console.log(buttonText);
  };
  return (
    <div className="app">
      <button onClick={onButtonCLick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('react-app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
