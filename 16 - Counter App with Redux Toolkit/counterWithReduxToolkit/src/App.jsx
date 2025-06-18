import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/slices/CounterSlice';

const App = () => {

  const count = useSelector( (state) => state.counter.value );
  const dispatch = useDispatch();

  return (
    <main>
      <div>
        <button onClick={() => dispatch(increament())}>
          Increment
        </button>

        <br /><br />

        <div>{count}</div>

        <br /><br />

        <button onClick={() => dispatch(decreament())}>
          Decreament
        </button>
      </div>
    </main>
  )
}

export default App