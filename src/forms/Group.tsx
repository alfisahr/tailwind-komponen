import { ReactNode } from "react";
import { useUniqueID } from "../utils/useUniqueID";
import { FormGroupContext } from "./FormGroupContext";

type GroupProps = {
  children: ReactNode;
};

export const Group = ({ children }: GroupProps) => {
  const id = useUniqueID();
  return (
    <FormGroupContext.Provider value={id}>
      <div>{children}</div>
    </FormGroupContext.Provider>
  );
};
