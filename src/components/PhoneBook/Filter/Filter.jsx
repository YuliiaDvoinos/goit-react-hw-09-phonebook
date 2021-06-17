import styles from "./Filter.module.css";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getFilter } from "../../../redux/ContactsBook";
import { useCallback } from "react";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = useCallback(
    (event) => dispatch(changeFilter(event.currentTarget.value)),
    [dispatch]
  );
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find number by name
        <input
          type="text"
          value={value}
          onChange={onFilterChange}
          className={styles.input}
        />
      </label>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   value: getFilter(state),
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFilterChange: (event) =>
//       dispatch(changeFilter(event.currentTarget.value)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
