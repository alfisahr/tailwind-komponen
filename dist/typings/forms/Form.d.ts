import React from "react";
import { Group } from "./Group";
import { Control } from "./Control";
import { Label } from "./Label";
export interface FormComposition {
    Group: typeof Group;
    Control: typeof Control;
    Label: typeof Label;
}
declare const Form: React.FC & FormComposition;
export default Form;
