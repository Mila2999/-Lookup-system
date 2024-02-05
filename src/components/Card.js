import classes from './Card.module.css';
import { Link } from 'react-router-dom';
function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.userDetailsContainer}>
        <span className={classes.name}>{props.name}</span>
        <span className={classes.email}>{props.email}</span>
      </div>
      <Link to={'/' + props.id}>
        <button className={classes.button}>More info</button>
      </Link>
    </div>
  );
}
export default Card;
