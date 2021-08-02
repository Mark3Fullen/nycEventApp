import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/Home'

function App() {

  // const unique = [...new Map(arr.map(item => [item[key], item])).values()]

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

  // const uniqueEvents = [...new Map(events.map(event => [event.event_id, event])).values()]

  console.log(events)


  return (
    <div className="App">
      <header className="Header">
        <h1>Welcome to the Borough!</h1>
      </header>
      <aside className="Aside">
        <ul>
          <li>
            Link 1
          </li>
          <li>
            Link 2
          </li>
          <li>
            Link 3
          </li>
        </ul>
      </aside>
      <BrowserRouter>
        <Route path="/">
          <Home events={events} />
        </Route>
      </BrowserRouter>
    </div>

  );
}

export default App;
