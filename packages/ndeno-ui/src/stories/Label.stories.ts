import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";

import { Label } from "../components/Label/Label";

const component = Label as unknown as Meta<typeof Label>["component"];

const meta: Meta<typeof Label> = {
  title: "Example/Label",
  component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "foo",
    onClick: () => alert("bar"),
  },
};
