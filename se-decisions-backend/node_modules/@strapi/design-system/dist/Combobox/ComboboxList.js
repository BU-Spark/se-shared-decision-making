import r from "prop-types";
const p = ({ options: o }) => o;
p.propTypes = {
  options: r.array.isRequired
};
export {
  p as ComboboxList
};
