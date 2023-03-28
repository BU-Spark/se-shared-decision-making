import e from "react";
import r from "styled-components";
import { RawTr as o } from "../RawTable/RawTr.js";
const d = r(o)`
  border-bottom: 1px solid ${({ theme: t }) => t.colors.neutral150};

  & td,
  & th {
    padding: ${({ theme: t }) => t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({ theme: t }) => t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56 / 16}rem;
  }
`, n = (t) => /* @__PURE__ */ e.createElement(d, { ...t });
export {
  n as Tr
};
