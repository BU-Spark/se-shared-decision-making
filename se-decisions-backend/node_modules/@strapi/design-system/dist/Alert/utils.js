const s = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger100 : o === "success" ? r.colors.success100 : o === "warning" ? r.colors.warning100 : r.colors.primary100, n = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger200 : o === "success" ? r.colors.success200 : o === "warning" ? r.colors.warning200 : r.colors.primary200, c = ({ theme: r, variant: o }) => o === "danger" ? r.colors.danger700 : o === "success" ? r.colors.success700 : o === "warning" ? r.colors.warning700 : r.colors.primary700;
export {
  s as handleBackgroundColor,
  n as handleBorderColor,
  c as handleIconColor
};
