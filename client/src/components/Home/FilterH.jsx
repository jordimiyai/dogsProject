import { useDispatch, useSelector } from "react-redux";
import { filterByOriginal, filterByTemper } from "../../store/actions";

export default function FilterH(){
  const dispatch = useDispatch()
  const allTemperaments = useSelector((state) => state.temperaments);

  function handleFilterOriginality(e) {
    dispatch(filterByOriginal(e.target.value));
  }

  function handleFilterTemper(e) {
    dispatch(filterByTemper(e.target.value));
  }

    return <div>

<h3>Filter by</h3>
<select onChange={(e) => handleFilterOriginality(e)}>
  <option value="all">By Originality</option>
  <option value="original">Original Breeds</option>
  <option value="created">Created Breeds</option>
</select>
<select onChange={(e) => handleFilterTemper(e)}>
  <option value="all">By Temperaments</option>
  {allTemperaments ? (
    allTemperaments.map((temper) => {
      return (
        <option key={temper.id} value={temper.name}>
          {temper.name}
        </option>
      );
    })
  ) : (
    <option>Temperaments</option>
  )}
</select>
    </div>
}
