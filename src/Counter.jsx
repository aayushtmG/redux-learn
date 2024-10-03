import { useSelector, useDispatch } from "react-redux"
import { logOut, logIn } from "./counterSlice"
export default function Counter() {
  const logState = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(logOut())}>
          Logout
        </button>
        <span>{logState}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(logIn())}>
          LogIn
        </button>
      </div>
    </div>
  )
}
