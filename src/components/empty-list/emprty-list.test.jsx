import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyList from "./empty-list";

test("EmptyList Component schould render correctly", () => {
  render(<EmptyList />);
  expect(
    screen.getByText("Здесь появится список пользователей GitHub")
  ).toBeInTheDocument();
});
