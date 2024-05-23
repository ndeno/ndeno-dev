import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextInput } from "../components/TextInput/TextInput";

const component = TextInput as unknown as Meta<typeof TextInput>["component"];

const meta: Meta<typeof TextInput> = {
  title: "Example/TextInput",
  component,
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
