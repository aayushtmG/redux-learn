import { useSelector } from "react-redux"
export default function Status() {
  const logState = useSelector((state) => state.counter.value)
  return (
    <div>
      <h2>{logState}</h2>
    </div>
  )
}
