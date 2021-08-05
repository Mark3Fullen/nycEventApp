import EventContainer from "./EventContainer";
import { Typography } from '@material-ui/core';

function Construction( {events} ) {
    
    const constructionEvents = events.filter( event => event.event_name.toLowerCase().includes('construction') ) 

    return (
    <div>
        <div style={{padding:"20px",
        margin: "30px"}}>

            <Typography variant="h3">Construction</Typography></div>
            <EventContainer events={constructionEvents}/>
        </div>
    )
}

export default Construction