import { ReactNode } from "react";
import { useUniqueID } from "../utils/useUniqueID";
import { FormContext } from "./FormContext";
import { Group } from "./Group";
import { Control } from "./Control";
import { Label } from "./Label";

interface FormComposition {
  Group: typeof Group;
  Control: typeof Control;
  Label: typeof Label;
}

const Form: React.FC & FormComposition = ({ children }) => {
  const formID = useUniqueID();

  return <FormContext.Provider value={formID}>{children}</FormContext.Provider>;
};

Form.Group = Group;
Form.Control = Control;
Form.Label = Label;

export default Form;
