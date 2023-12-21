import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Form from "../forms/Form";
import { Control } from "../forms/Control";

const meta = {
  title: "Example/Form",
  component: Form.Control,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ placeholder }: { placeholder: string }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder={placeholder} />
      </Form.Group>
    </Form>
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
