import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import * as redux from "react-redux";
import "@testing-library/jest-dom";
import Search from "./search";

const mockStore = configureStore();

describe("SearchComponent", () => {
  it("SearchComponent schould render correctly", () => {
    render(
      <redux.Provider store={mockStore({})}>
        <Search />
      </redux.Provider>
    );
    expect(screen.getByLabelText(/По возрастанию/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/По убыванию/i)).toBeInTheDocument();
    expect(
      screen.getByText("Сортировать по количеству публичных репозиториев:")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Поиск" }));
  });
  it("SearchComponent snapshot", () => {
    const search = render(
      <redux.Provider store={mockStore({})}>
        <Search />
      </redux.Provider>
    );
    expect(search).toMatchSnapshot();
  });
});
