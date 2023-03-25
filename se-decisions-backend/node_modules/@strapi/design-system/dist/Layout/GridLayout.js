import p from "prop-types";
import e from "styled-components";
const i = e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: r }) => r.spaces[4]};
`;
i.propTypes = {
  children: p.node.isRequired
};
export {
  i as GridLayout
};
