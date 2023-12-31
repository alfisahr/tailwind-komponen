import React, { useContext } from "react";
import { FieldContext } from "./FieldContext";
import { StyledTextarea } from "./styles";
import PropTypes from "prop-types";

export interface TextareaProps extends React.ComponentPropsWithRef<"textarea"> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  },
);

Textarea.displayName = "Field.Textarea";

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
