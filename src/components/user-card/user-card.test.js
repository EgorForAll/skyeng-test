import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./user-card";

const userMock = {
  login: "Brad",
  id: 1,
  node_id: "",
  avatar_url: "https://brad-avatar.ru",
  gravatar_id: "",
  url: "",
  html_url: "https://brad-page.git",
  followers_url: "",
  following_url: "",
  gists_url: "",
  starred_url: "",
  subscriptions_url: "",
  organizations_url: "",
  repos_url: "",
  events_url: "",
  received_events_url: "",
  type: "User",
  site_admin: false,
  score: 2,
};

describe("UserCard", () => {
  it("UserCard component schould render correctly", () => {
    render(<UserCard user={userMock} />);
    expect(screen.getByRole("button", { name: "Узнать тип пользователя" }));
    expect(screen.getByText("Профиль:"));
    expect(screen.getByText(userMock.login));
    expect(screen.getByRole("link")).toHaveAttribute("href", userMock.html_url);
    expect(screen.getByRole("img")).toHaveAttribute("src", userMock.avatar_url);
  });
  it("UserCard snapshot", () => {
    const userCard = render(<UserCard user={userMock} />);
    expect(userCard).toMatchSnapshot();
  });
});
