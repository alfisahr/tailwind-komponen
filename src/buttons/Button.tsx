import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        type="button"
        {...props}
      >
        {children}
      </StyledButton>
    );
  },
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isFullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: "secondary",
  size: "medium",
  isFullWidth: false,
};

Button.displayName = "Button";
