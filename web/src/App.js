import React, {useEffect, useState} from 'react'
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import './App.css';
import './global.css';
import './Main.css';
import './Sidebar.css';

function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get('/devs');
    setDevs(response.data);
    console.log(response.data);
  }

  async function handleDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

useEffect(() => {
  loadDevs();
}, []);


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev =>(
            <DevItem dev={dev} key={dev._id}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;