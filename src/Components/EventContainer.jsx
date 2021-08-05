import EventCard from "./EventCard"
import Grid from '@material-ui/core/Grid';

function EventContainer({ events }) {
    console.log(events)

    return (<Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing= "6"
      >
        
        {events.map(event => <EventCard key={event.event_id + event.start_date_time} event={event} />)}
        </Grid>)

}

export default EventContainer