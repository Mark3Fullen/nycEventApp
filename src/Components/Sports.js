import EventContainer from "./EventContainer"
import { Typography } from '@material-ui/core';

function Sports( {events} ) {

    const sportsEvents = events.filter( event => event.event_name.toLowerCase().includes('sport') ||event.event_name.toLowerCase().includes('soccer') ||event.event_name.toLowerCase().includes('basketball') ||event.event_name.toLowerCase().includes('tournament')||event.event_location.toLowerCase().includes('basketball'))

    return (<div>
        <div style={{padding:"20px",
        margin: "30px"}}>

            <Typography variant="h3">Sports</Typography></div>
            <EventContainer events={sportsEvents} />
        </div>
    )
}

export default Sports