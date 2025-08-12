import { BrowserRouter } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import Header from "./Header";
import CartNavItem from "./CartNavItem";
import CartProvider from "./../context/CartProvider";
import Button from "./Button";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

const Template = (args) => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header {...args} />
      </CartProvider>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "기본 헤더",
  theme: "dark",
};

export const ProductPage = Template.bind({});
ProductPage.args = {
  rightArea: <CartNavItem />,
  theme: "dark",
};

export const CardList = Template.bind({});
CardList.args = {
  title: "보유카드",
  rightArea: <Button icon={<IoCloseOutline />} variant="icon" />,
  theme: "light",
};

export const RegisterCard = Template.bind({});
RegisterCard.args = {
  title: "카드 추가",
  leftArea: <Button icon={<IoIosArrowBack />} variant="icon" />,
  rightArea: <Button icon={<IoCloseOutline />} variant="icon" />,
  theme: "light",
};
