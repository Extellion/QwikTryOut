import { component$, $ } from "@builder.io/qwik";

export const Counter = component$(({ state }) => {
  const addCounter = $(() => state.counters = [...state.counters, {count: 0}])

  return (
    <div onClick$={() => addCounter()}>
      Add a counter
    </div>
  )
})