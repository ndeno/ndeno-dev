import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextInput } from "../components/TextInput/TextInput";
import { Label } from "../components/Label/Label";

const Component = TextInput as unknown as Meta<typeof TextInput>["component"];

const meta: Meta<typeof TextInput> = {
  title: "Example/TextInput",
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
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    // children: "foo",
    // onClick: () => alert("bar"),
  },
};
