import { component$, $ } from "@builder.io/qwik";

export const Delete = component$(({ state, index }) => {
  const deleteCounter = $(() => {
    const curratedState = [...state.counters.slice(0, index), ...state.counters.slice(index + 1)]
    console.log(curratedState, index);
    return state.counters = curratedState
  })
  return (
    <button onClick$={() => deleteCounter()}>
      Remove
    </button>
  )
})