import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';



function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <Header />
      </div>
    </div>
  );
}

export default App;
