import styles from "./Filter.module.css";
import { connect } from "react-redux";
//redux imports
import { changeFilter, getFilter } from "../../../redux/ContactsBook";
const Filter = ({ value, onFilterChange }) => {
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
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (event, contacts) =>
      dispatch(changeFilter(event.currentTarget.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
