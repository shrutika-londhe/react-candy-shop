import React,{useState} from 'react';
import classes from './CandyInput.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';

const CandyInput = (props) => {
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');

    const onNameChange =(event)=>{
        setName(event.target.value)     
    }
    
    const onDescChange = (event) =>{
        setDesc(event.target.value)
    }

    const onPriceChange = (event) =>{
        setPrice(event.target.value)
    }

    const submitHandle=()=>{
       props.onCandyInput(name,desc,price)  
       
    }


  return (
        <Card className={classes.input}>
        <label>Candy Name</label>
        <input type='text' onChange={onNameChange}/>
        <label>Candy Description </label>
        <input type='text'onChange={onDescChange}/>
        <label>Candy Price</label>
        <input type='number' onChange={onPriceChange}/>
        <Button type="submit" onClick={submitHandle}>Add to form</Button>
        </Card>
  )
}

export default CandyInput