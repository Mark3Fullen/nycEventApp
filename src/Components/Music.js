import EventContainer from "./EventContainer";
import { Typography } from '@material-ui/core';

function Music( {events} ) {

    const musicEvents = events.filter( event => event.event_name.toLowerCase().includes('music') || event.event_name.toLowerCase().includes('band') || event.event_name.toLowerCase().includes('jam') || event.event_name.toLowerCase().includes('dj') || event.event_name.toLowerCase().includes('concert')|| event.event_name.toLowerCase().includes('festival') || event.event_location.toLowerCase().includes('amphitheater'))

    return (<div>
        <div style={{padding:"20px",
        margin: "40px"}}>

<Typography variant="h3">Music</Typography>
</div>
            <EventContainer events={musicEvents} />
        </div>
    )
}

export default Music