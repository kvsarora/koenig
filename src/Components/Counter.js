import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from "../redux/CounterSlice";

function Counter(){
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();  
    return(
        <div>
        <h1>Counter</h1>
        <p>Count : {count}</p>
        <button onClick={()=>dispatch(increment())}>INC</button>
        <button onClick={()=>dispatch(decrement())}>DEC</button>
    </div>
)

}
export default  Counter;