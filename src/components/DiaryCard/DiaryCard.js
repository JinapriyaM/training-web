import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: 50,
    maxWidth:300,
    
  },
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

const SimpleCard = (props) => {
  const classes = useStyles();

  let showMore = null;
  if(props.desc.length>10){
    showMore = (<CardActions>
      <Button size="small">Show More</Button>
    </CardActions>)
  }
      
  return (
    <Card className={classes.root} style={{backgroundColor: "#B9E9FF", margin: 20}}>
      <CardContent >
        <Typography className={classes.title} variant="h1"  gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.user}
        </Typography>
        <Typography variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      {showMore}
    </Card>
  );
}

export default SimpleCard;