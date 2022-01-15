import { useDispatch, useSelector } from "react-redux";
import { filterByOriginal, filterByTemper } from "../../store/actions";

export default function FilterH() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

  function handleFilterOriginality(e) {
    if (
      e.target.value === "original" ||
      e.target.value === "created" ||
      e.target.value === "all"
    ) {
      dispatch(filterByOriginal(e.target.value));
    } else {
      dispatch(filterByTemper(e.target.value));
    }
  }

  return (
    <div className="Filter">
      <select onChange={(e) => handleFilterOriginality(e)}>
      <option value="all">-Filter-</option>

        <option value="all">--by Originality</option>
        <option value="original">Original Breeds</option>
        <option value="created">Created Breeds</option>
        <option value="all">--by Temperaments</option>
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
  );
}
