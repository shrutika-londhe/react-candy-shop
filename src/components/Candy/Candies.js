import React,{useState} from 'react'
import classes from './Candies.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Candies = (props) => {
    const [Candies, setCandyList] = useState([]);

    const onClickHandler = (id) => {
        setCandyList(Candies => Candies.filter(Candies => Candies.id !== id));
        console.log("prev : ", Candies)
    };
  return (
    <Card className={classes.candi}>
        <form>
            <h2>Candies</h2>
            <div>
                <ul>
            {props.Candies.map((Candies) => (
            <li key={Candies.id}>
                 <span>{Candies.name} {Candies.price}</span>
                <Button className={classes.btn} onClick={onClickHandler}>Add to Cart</Button>
            </li>  
        ))}
         </ul>
        </div>
        </form>
    </Card>
)}
export default Candies