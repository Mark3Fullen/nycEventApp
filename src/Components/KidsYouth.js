import EventContainer from "./EventContainer";
import { Typography } from '@material-ui/core';

function KidsYouth( {events} ) {

    const kidsYouthEvents = events.filter( event => event.event_name.toLowerCase().includes('kid') || event.event_name.toLowerCase().includes('youth'))

    return (<div>
        <div style={{padding:"20px",
        margin: "30px"}}>

            <Typography variant="h3">Youth</Typography></div>
            <EventContainer events={kidsYouthEvents} />
        </div>
    )
}

export default KidsYouth