import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavItem from "./../components/NavItem";
import { MdOutlineShoppingBag } from "react-icons/md";

describe("NavItem 컴포넌트 단위 테스트", () => {
  const icon = <MdOutlineShoppingBag />;

  test("아이콘 렌더링 확인", () => {
    const { container } = render(<NavItem icon={icon} badgeContent={0} />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  test("badgeContent 0일 때 badge표시되지 않는지 확인", () => {
    render(<NavItem icon={icon} badgeContent={0} />);

    const badge = screen.queryByText("0");

    expect(badge).not.toBeInTheDocument();
  });

  test("badgeContent가 default max보다 같거나 작을 때 badgeContent 값으로 표시되는지 확인", () => {
    const badgeContent = 99;
    render(<NavItem icon={icon} badgeContent={badgeContent} />);

    expect(screen.getByText(String(badgeContent))).toBeInTheDocument();
  });

  test("badgeContent가 max보다 같거나 작을 때 badgeContent 값으로 표시되는지 확인", () => {
    const badgeContent = 9;
    const maxCount = 9;
    render(<NavItem icon={icon} badgeContent={badgeContent} max={maxCount} />);

    expect(screen.getByText(String(badgeContent))).toBeInTheDocument();
  });

  test("badgeContent가 max보다 클 때 `${max+}` 값으로 표시되는지 확인", () => {
    const badgeContent = 14;
    const maxCount = 13;
    render(<NavItem icon={icon} badgeContent={badgeContent} max={maxCount} />);

    expect(screen.getByText(`${maxCount}+`)).toBeInTheDocument();
  });

  test("클릭 시 onClick 핸들러가 실행되는지 확인", async () => {
    const handleClick = jest.fn();
    render(<NavItem icon={icon} badgeContent={1} onClick={handleClick} />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
