import { useState } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 275,
      display: 'inline-block',
      padding: "12px",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }},
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function EventCard({ event }) {

    const classes = useStyles()

    const [ likes , setLikes] = useState(0);
    function incrementalLikes() {
        setLikes(likes + 1)}
        return (
<Grid item >
        <Card variant="outlined" className={classes.root} elevation={2}>
            <CardHeader title = {event.event_name}
            subheader = {event.event_borough}/>
            <CardContent>
<Typography>
{event.event_location}
</Typography>
            </CardContent>
            <CardContent>
<Typography>
{event.start_date_time}
</Typography>
            </CardContent>
            
            <Button startIcon={<EventAvailableIcon/>} size="small" variant="contained" color="primary"
             onClick= {incrementalLikes}>Interested {likes}</Button>
            </Card>
            </Grid>

    )
}

export default EventCard



