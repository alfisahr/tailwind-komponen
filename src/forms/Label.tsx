import React from "react";
import { ReactNode, useContext } from "react";
import { FormGroupContext } from "./FormGroupContext";
import { StyledLabel } from "./styles";

export const Label = ({ children, ...rest }: { children: ReactNode }) => {
  const id = useContext(FormGroupContext);

  return (
    <StyledLabel htmlFor={id} {...rest}>
      {children}
    </StyledLabel>
  );
};
