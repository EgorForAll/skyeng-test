import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { UsersList } from "./users-list";
import "@testing-library/jest-dom";

const users = [];

describe("UsersList Component", () => {
  it("UserList schould render correctly", () => {
    render(<UsersList users={users} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("UsersList Snapshot", () => {
    const usersList = render(<UsersList users={users} />);
    expect(usersList).toMatchSnapshot();
  });
});
