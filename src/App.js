import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/Home'

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/tvpp-9vvx.json')
      .then(res => {
        return res.json()
      })
      .then(json => {
        setEvents([...new Map(json.map(event => [event.event_id, event])).values()])
      })
  }, [])

  // console.log(events.map(event => console.log(event)))



  return (
    <div className="App">
      <header className="Header">
        <h1>Welcome to the Borough!</h1>
      </header>
      <aside className="Aside">
        <ul>
          <li>
            Sports
          </li>
          <li>
            Music
          </li>
          <li>
            Construction
          </li>
        </ul>
      </aside>
        <div className="Content">
          <BrowserRouter>
            <Route path="/">
              <Home events={events} />
            </Route>
          </BrowserRouter>
        </div>
    </div>

  );
}

export default App;
