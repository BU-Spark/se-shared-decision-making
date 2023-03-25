import o from "styled-components";
import { Flex as t } from "../Flex/Flex.js";
import { inputFocusStyle as c } from "../themes/utils.js";
const l = o(t)`
  line-height: ${({
  theme: e
}) => e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
  }

  .cm-scroller {
    border: 1px solid ${({
  theme: e,
  hasError: r
}) => r ? e.colors.danger600 : e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${c()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({
  theme: e
}) => e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`;
export {
  l as JSONInputContainer
};
