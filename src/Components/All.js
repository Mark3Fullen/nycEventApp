import EventContainer from "./EventContainer"
import { Typography } from '@material-ui/core';

function All({ events }) {
    return (<div>
        <div style={{padding:"20px",
                    margin: "30px"}}>
            <Typography variant="h3">All Events</Typography></div>
            <EventContainer events={events} />

        </div>
    )
}

export default All