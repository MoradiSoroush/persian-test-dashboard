import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import routes from './routes';


function App() {

  let router = useRoutes(routes)

  console.log(router)
  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
