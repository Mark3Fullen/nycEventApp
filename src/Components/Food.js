import EventContainer from "./EventContainer";
import { Typography } from '@material-ui/core';

function Food( {events} ) {

    const foodEvents = events.filter( event => event.event_name.toLowerCase().includes('food') || event.event_name.toLowerCase().includes('picnic') || event.event_name.toLowerCase().includes('farm') )

    return (<div>
        <div style={{padding:"20px",
        margin: "30px"}}>

            <Typography variant="h3">Food</Typography></div>
            <EventContainer events={foodEvents}/>
        </div>
    )
}

export default Food