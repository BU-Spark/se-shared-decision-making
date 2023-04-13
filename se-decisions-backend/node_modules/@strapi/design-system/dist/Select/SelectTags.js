import a from "react";
import { Cross as n } from "@strapi/icons";
import e from "prop-types";
import o from "styled-components";
import { Flex as m } from "../Flex/Flex.js";
import { Tag as i } from "../Tag/Tag.js";
const c = o.div`
  margin-bottom: ${({ theme: r }) => r.spaces[1]};
`, f = o(i)`
  margin-left: ${({ theme: r }) => r.spaces[1]};
  margin-top: ${({ theme: r }) => r.spaces[1]};
`, l = ({ tags: r, onRemoveTag: s, disabled: p }) => /* @__PURE__ */ a.createElement(c, null, /* @__PURE__ */ a.createElement(m, { wrap: "wrap" }, r.map((t) => /* @__PURE__ */ a.createElement(
  f,
  {
    disabled: p,
    key: `tag-${t.value}`,
    icon: /* @__PURE__ */ a.createElement(n, null),
    onClick: () => s(t.value),
    position: "relative",
    tabIndex: -1,
    zIndex: 1
  },
  t.label
))));
l.defaultProps = {
  disabled: !1,
  tags: []
};
l.propTypes = {
  disabled: e.bool,
  onRemoveTag: e.func.isRequired,
  tags: e.arrayOf(
    e.shape({ label: e.string, value: e.oneOfType([e.string, e.number]) })
  )
};
export {
  l as SelectTags
};
