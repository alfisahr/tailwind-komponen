import { useContext } from "react";
import { FormGroupContext } from "./FormGroupContext";
import { StyledControl } from "./styles";

export const Control = ({ ...rest }) => {
  const id = useContext(FormGroupContext);

  return <StyledControl id={id} {...rest} />;
};
