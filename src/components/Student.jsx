import PropTypes from "prop-types";
export default function Student(props) {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Is student? {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
// Declaring what data type
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// Declare defualt value 
Student.defaultProps = {
  name: "Cris",
  age: 0,
  isStudent: false,
};
