import React, { useState } from "react";

import BaseInput from "./BaseInput";

export default {
  title: "Components/BaseInput",
  component: BaseInput,
  argTypes: {
    maxLength: { control: "number" },
    inputMode: {
      control: { type: "select" },
      options: ["text", "numeric", "tel", "email", "url"],
    },
    placeholder: { control: "text" },
    autoFocus: { control: "boolean" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");

  return <BaseInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  maxLength: 30,
  inputMode: "text",
  placeholder: "",
  autoFocus: false,
};

export const OwnerName = Template.bind({});
OwnerName.args = {
  ...Default.args,
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
};

export const CVCCode = Template.bind({});
CVCCode.args = {
  ...Default.args,
  maxLength: 3,
  inputMode: "numeric",
};
