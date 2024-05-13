import logo from './logo.svg';
import './App.css';
import OpenQueshtion from './comonent/OpenQueshtion';
import LogIn from './comonent/LogIn';
import Test1 from './comonent/Test1';

function App() {
  return (
    <div>
      <LogIn/>
      <OpenQueshtion/>
      <Test1 txt= "hey"/>
    </div>
  );
}

export default App;
