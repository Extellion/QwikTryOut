import { component$, $ } from "@builder.io/qwik";

export const Minus = component$(({ state, index }) => {
  const decrementCounter = $(() => state.counters[index].count--)

  return (
    <button onClick$={() => decrementCounter()}>
      -
    </button>
  )
})