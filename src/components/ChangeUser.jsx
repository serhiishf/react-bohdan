import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  const [ inputValue, setInputValue ] = useState('')
  console.log(inputValue)
  return (
    <div>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={() => changeUserName(inputValue)}>Change user name</button>
    </div>
  )
  ;
}

export default ChangeUser;
