import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/Home'
import Sports from './Components/Sports'
import Music from './Components/Music'
import Construction from './Components/Construction';
import Food from './Components/Food';
import Nav from "./Components/Nav"
import KidsYouth from "./Components/KidsYouth"
import All from "./Components/All"
import SortBurough from "./Components/SortBurough"
import Search from "./Components/Search"
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: "30px",
    }})

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/tvpp-9vvx.json')
      .then(res => {
        return res.json()
      })
      .then(json => { setEvents(json.filter( event => Date.parse(event.start_date_time) > Date.parse(new Date())).sort(function(a,b){ return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)}))
      })
  }, [])

      const [dropDownValue, setDropDownValue] = useState('')
      const [searchBarValue, setSearchBarValue] = useState('')

      function dropDownHandler(e) {
          setDropDownValue(e)
      }

      function searchHandler(e) {
          setSearchBarValue(e)
      }

      const filteredEvents = events.filter(event => event.event_borough.includes(dropDownValue) && event.event_name.toLowerCase().includes(searchBarValue.toLowerCase()))

      
      const classes = useStyles()

  return (
    <div className="App">
      <Card className= {classes.root}>
      <Typography variant="h2" component="h1" align="center">
        NYC Park Events
      </Typography>
      <Typography variant="h5"  align="center">
        find events through issued permits
      </Typography>
      </Card>

        <div className="Directory">
          <BrowserRouter>
              <Nav/>
              <Grid>
                <Search searchHandler={searchHandler} />
                <SortBurough  dropDownHandler = {dropDownHandler}/>
              </Grid>
            <div className="Content">
            <Route exact path="/">
              <Home events={filteredEvents} />
            </Route>
            <Route path="/sports">
              <Sports events={filteredEvents}/>
            </Route>
            <Route path="/music">
              <Music events={filteredEvents}/>
            </Route>
            <Route path="/construction">
              <Construction events={filteredEvents}/>
            </Route>
            <Route path="/food">
              <Food events={filteredEvents}/>
            </Route>
            <Route path="/KidsYouth">
              <KidsYouth events={filteredEvents}/>
            </Route>
            <Route path="/All">
              <All events={filteredEvents}/>
            </Route>
            </div>
          </BrowserRouter>
        </div>

    </div>

  );
}

export default App;