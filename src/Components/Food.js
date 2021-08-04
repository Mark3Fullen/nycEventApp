import EventContainer from "./EventContainer";

function Food( {events} ) {

    const foodEvents = events.filter( event => event.event_name.toLowerCase().includes('food') || event.event_name.toLowerCase().includes('picnic') || event.event_name.toLowerCase().includes('farm') )

    return (
        <>
            <h1>Food!</h1>
            <EventContainer events={foodEvents}/>
        </>
    )
}

export default Food