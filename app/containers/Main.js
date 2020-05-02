import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginRight: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
export default () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="row mt-3 px-3">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Cute Dog
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Animals
          </Typography>
          <Skeleton animation="wave" style={{width: '80%', height: '12px', marginBottom: '5px'}}/>
          <Skeleton animation="wave" style={{width: '85%', height: '12px', marginBottom: '5px'}}/>
          <Skeleton animation="wave" style={{width: '88%', height: '12px', marginBottom: '5px'}}/>
          <Skeleton animation="wave" style={{width: '80%', height: '12px', marginBottom: '5px'}}/>
          <Skeleton animation="wave" style={{width: '90%', height: '12px', marginBottom: '5px'}}/>
          <Skeleton animation="wave" style={{width: '70%', height: '12px', marginBottom: '5px'}}/>
        </CardContent>
        <Divider />
        <CardActions>
          <div className="float-right">
            <Avatar className={classes.small}>OP</Avatar> Matt
          </div>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          
        </CardContent>
      </Card>
    </div>
  );
}
