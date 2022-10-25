import { component$, $ } from "@builder.io/qwik";

export const Plus = component$(({ state, index }) => {
  const incrementCounter = $(() => state.counters[index].count++)
  return (
    <button onClick$={() => incrementCounter()}>
      +
    </button>
  )
})