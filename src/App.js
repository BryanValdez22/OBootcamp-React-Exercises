import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <ContactListComponent></ContactListComponent> */}
        <Clock></Clock>

      </header>
    </div>
  );
}

export default App;
