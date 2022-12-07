import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./DropStyle";

export function Dropdown(props: any) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      {/* <StyledButton type="submit" value={props.buttonText} /> */}
    </DropdownWrapper>
  );
}

export function Option(props: any) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
