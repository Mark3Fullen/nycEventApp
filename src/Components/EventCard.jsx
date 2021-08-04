// community_board: "7, "
// end_date_time: "2021-08-03T18:00:00.000"
// event_agency: "Parks Department"
// event_borough: "Brooklyn"
// event_id: "549530"
// event_location: "Sunset Park: Lawn at 44th and 6th "
// event_name: "Mobile COVID-19 Test Site"
// event_type: "Special Event"
// police_precinct: "72, "
// start_date_time: "2021-08-03T09:00:00.000"
// street_closure_type: "N/A"

import { useState } from "react"

function EventCard({ event }) {

    const [ likes , setLikes] = useState(0);
    function incrementalLikes() {
        setLikes(likes + 1)}
        return (<div>
            <h2>{event.event_name}</h2>
            <h3>{event.event_borough}</h3>
            <h4>{event.event_location}</h4>
            <h4>{event.start_date_time}</h4>
            <button onClick= {incrementalLikes}>Likes {likes}</button>
        </div>)

}

export default EventCard