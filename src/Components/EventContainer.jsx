import EventCard from "./EventCard"

function EventContainer({ events }) {
    console.log(events)

    return (<div>
        <h1> Event Container </h1>
        {events.map(event => <EventCard event={event} />)}
    </div>)

}

export default EventContainer