import { component$, useStore } from '@builder.io/qwik';
import { Counter } from './Counter';
import {Plus} from './Plus'
import { Minus } from './Minus'
import { Delete } from './Delete'


export const Home = component$(() => {
  const state = useStore({
    counters: [{
      count: 0
    }],
  }, { recursive: true });

  return (
    <div>
      <h1>Home</h1>
      <Counter state={state} />
      {state.counters.map((counter, index) => (
        <div>
          <h3>Count: </h3>
          <Minus state={state}  index={index} />
          {counter.count}
          <Plus state={state} index={index} />
          <Delete state={state} index={index} />
        </div>
      ))}
    </div>
  )
})
