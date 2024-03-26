
import { useDispatch, useSelector } from 'react-redux'
import {dec, inc, reset} from "./reducers/counter-reducer"


function App() {
  const dispatch = useDispatch()

  const data = useSelector((state)=>state.app)
  


  return (
    <>
    <button onClick={()=>dispatch(inc(1))}>+</button>
    {data.counter}
    <button onClick={()=>dispatch(dec(1))}>-</button>
    <button onClick={()=>dispatch(reset(0))}>Reset</button>

    </>
  )
}

export default App
