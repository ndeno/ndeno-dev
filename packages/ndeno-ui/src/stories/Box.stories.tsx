import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";

import { Box } from "../components/Box/Box";
import { Input } from "../components/Input/Input";
import { Label } from "../components/Label/Label";

const Component = Box as unknown as Meta<typeof Box>["component"];

const meta: Meta<typeof Box> = {
  title: "Example/Box",
  component: () => (
    <Component>
      <Label for="example-input">Example Input</Label>
      <Input id="example-input" />
    </Component>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    children: "foo",
    onClick: () => alert("bar"),
  },
};
