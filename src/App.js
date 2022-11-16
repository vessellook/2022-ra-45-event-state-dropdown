import './App.css';
import Dropdown from './components/Dropdown';

const items = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
];

function App() {
  return <Dropdown items={items} />;
}

export default App;
