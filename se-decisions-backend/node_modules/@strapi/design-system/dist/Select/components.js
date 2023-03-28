import e from "styled-components";
import { Box as t } from "../Box/Box.js";
import { Flex as n } from "../Flex/Flex.js";
import { getThemeSize as i, inputFocusStyle as l } from "../themes/utils.js";
const u = e(n)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};
  overflow: hidden;
  min-height: ${i("input")};

  ${({ theme: o, disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${l()}
`, d = e(t)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: o }) => o.colors.neutral600};
  }
`, $ = e(d)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({ disabled: o }) => o ? "not-allowed" : void 0};

  svg {
    width: ${6 / 16}rem;
  }
`;
export {
  $ as CaretBox,
  d as IconBox,
  u as SelectButtonWrapper
};
