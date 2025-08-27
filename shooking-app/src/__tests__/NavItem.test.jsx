import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MdOutlineShoppingBag } from "react-icons/md";

import NavItem from "./../components/NavItem";

describe("NavItem 컴포넌트 단위 테스트", () => {
  const icon = <MdOutlineShoppingBag />;

  test("아이콘, 뱃지 없을 때 렌더링", () => {
    render(<NavItem />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  test("아이콘 있을 때 렌더링", () => {
    const { container } = render(<NavItem icon={icon} badgeContent={0} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  test("badgeCount 1보다 작을 때 뱃지를 표시하지 않음", () => {
    render(<NavItem badgeContent={0} />);
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  test("badgeCount 1이상이고 max 값보다 작거나 같을 때 뱃지를 표시 함", () => {
    render(<NavItem badgeContent={9} max={9} />);
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  test("badgeCount max 값보다 클 때 max+ 표시", () => {
    render(<NavItem badgeContent={15} max={9} />);
    expect(screen.getByText("9+")).toBeInTheDocument();
  });

  test("NavItem 클릭 시 onClick 핸들러 동작 확인", async () => {
    const handleClick = jest.fn();
    render(<NavItem onClick={handleClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
