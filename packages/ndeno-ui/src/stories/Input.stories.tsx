import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "../components/Input/Input";
import { Label } from "../components/Label/Label";

const Component = Input as unknown as Meta<typeof Input>["component"];

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: () => (
    <>
      <Label for="example-input">Example Input</Label>
      <Component id="example-input" />
    </>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    // children: "foo",
    // onClick: () => alert("bar"),
  },
};
