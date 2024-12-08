import Candies from './components/Candy/Candies';
import CandyInput from './components/Candy/CandyInput';
import Header from './components/Layout/Header';
import React,{Fragment,useState} from 'react';

function App() {
  const [candyList,setCandyList] = useState([]);


  const onCandyChangeHandler =(name,desc,price) =>{
    setCandyList((prevCandyList) => {
      return [...prevCandyList, {name: name, desc: desc, price: price},
      ];
    });
  }
  console.log("candylist>>",candyList)

  return (
  <Fragment>
    <Header/>
    <CandyInput onCandyInput={onCandyChangeHandler}/>
    <Candies Candies={candyList}/>
  </Fragment>
  )
}

export default App;
