import { useState } from "react";
import SegmentedInput from "./SegmentedInput";

export default {
  title: "Components/SegmentedInput",
  component: SegmentedInput,
  argTypes: {
    inputCount: { control: "number" },
    maxLength: { control: "number" },
    inputMode: {
      control: { type: "select" },
      options: ["text", "numeric", "tel", "email", "url"],
    },
    placeholder: { control: "text" },
    separator: { control: "text" },
    autoFocusIndex: { control: { type: "number" } },
    varient: {
      control: { type: "select" },
      options: ["square"],
    },
    display: {
      control: { type: "radio" },
      options: ["full", "fit"],
    },
    justify: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
    },
    maskIndices: {
      control: { type: "object" },
    },
  },
};

const Template = (args) => {
  const [values, setValues] = useState(Array(args.inputCount).fill(""));

  return <SegmentedInput {...args} values={values} onChange={setValues} />;
};

export const Default = Template.bind({});
Default.args = {
  inputCount: 2,
  maxLength: 10,
  inputMode: "text",
  placeholder: "",
  separator: "",
  autoFocusIndex: null,
  display: "full",
  justify: "center",
  maskIndices: [],
  maskChar: "•",
};

export const CardNumber = Template.bind({});
CardNumber.args = {
  ...Default.args,
  inputCount: 4,
  maxLength: 4,
  inputMode: "numeric",
  separator: "-",
  maskIndices: [3, 4],
};

export const ExpiryDate = Template.bind({});
ExpiryDate.args = {
  ...Default.args,
  inputCount: 2,
  maxLength: 2,
  inputMode: "numeric",
  separator: "/",
  display: "fit",
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  inputCount: 2,
  maxLength: 1,
  inputMode: "numeric",
  varient: "square",
  display: "fit",
  background: "transparent",
  maskIndices: [1, 2],
};
