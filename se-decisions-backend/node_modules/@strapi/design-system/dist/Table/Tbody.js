import t from "react";
import r from "styled-components";
import { RawTbody as e } from "../RawTable/RawTbody.js";
const m = r(e)`
  & tr:last-of-type {
    border-bottom: none;
  }
`, n = (o) => /* @__PURE__ */ t.createElement(m, { ...o });
export {
  n as Tbody
};
