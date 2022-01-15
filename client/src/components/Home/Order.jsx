import { useDispatch } from "react-redux";
import { orderBy } from "../../store/actions";
import { ASC, DESC, HEAVIEST, LIGHTEST } from "../../store/constants";
import "./home.css";


export default function Order() {
  const dispatch = useDispatch()
  function handleOrderSelector(e) {
    dispatch(orderBy(e.target.value));
  }
  return (
    <div className="Order">
      <select onChange={(e) => handleOrderSelector(e)}>
        <option value="">Order By</option>
        <option value={ASC}>A to Z</option>
        <option value={DESC}>Z to A</option>
        <option value={LIGHTEST}>Lightest first</option>
        <option value={HEAVIEST}>Heaviest first</option>
      </select>
    </div>
  );
}
