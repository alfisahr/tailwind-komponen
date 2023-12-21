import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../fields/Field";

const meta = {
  title: "Example/Input",
  component: Field.Input,
  subcomponents: {
    Field,
    label: Field.Label,
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ placeholder }: { placeholder: string }) => {
  return (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  );
};
Default.args = {
  placeholder: "Placeholder inputt",
};

// export const Default: Story = {
//   args: {
//     placeholder: "Inputku",
//   },
// };
