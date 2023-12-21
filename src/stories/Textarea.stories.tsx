import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../fields/Field";

const meta = {
  title: "Example/Textarea",
  component: Field.Textarea,
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
      <Field.Label>Textarea</Field.Label>
      <Field.Textarea placeholder={placeholder} />
    </Field>
  );
};
Default.args = {
  placeholder: "Placeholder textarea",
  isResizable: true,
};

// export const Default: Story = {
//   args: {
//     placeholder: "Inputku",
//   },
// };
