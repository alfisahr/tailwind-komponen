import React from "react";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    isFullWidth?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
