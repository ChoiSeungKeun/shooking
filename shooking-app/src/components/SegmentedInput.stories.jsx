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
    varient: {
      control: { type: "select" },
      options: ["square"],
    },
    display: {
      control: { type: "select" },
      options: ["full", "fit"],
    },
    justity: {
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    background: { control: "color" },
  },
};

const Template = (args) => {
  const [values, setValues] = useState(Array(args.inputCount).fill(""));

  return <SegmentedInput {...args} values={values} onChange={setValues} />;
};

export const Default = Template.bind({});
Default.args = {
  inputCount: 2,
};

export const CardNumber = Template.bind({});
CardNumber.args = {
  inputCount: 4,
  maxLength: 4,
  inputMode: "numeric",
  placeholder: "XXXX",
  separator: "-",
};

export const ExpiryDate = Template.bind({});
ExpiryDate.args = {
  inputCount: 2,
  maxLength: 2,
  inputMode: "numeric",
  placeholder: "XX",
  separator: "/",
  display: "fit",
};

export const Password = Template.bind({});
Password.args = {
  inputCount: 2,
  maxLength: 1,
  inputMode: "numeric",
  placeholder: "X",
  varient: "square",
  display: "fit",
  background: "transparent",
};
