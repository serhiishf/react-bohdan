import UserContext from '../context/UserContext';
import { useContext } from 'react';

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  return <button onClick={() => changeUserName(userName === 'Bohdan' ? 'Alice' : 'Bohdan')}>Change user name </button>;
}

export default ChangeUser;
