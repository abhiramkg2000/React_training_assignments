/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import App from "../../App";
import UserProvider from "../../context/UserProvider";

describe("Login Page test cases", () => {
  test("on initial render check if email field is present", () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
  });

  test("on initial render check if password field is present", () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
  });

  test("on initial render check if login button is present", () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    const login = screen.getByTestId("login");
    expect(login).toBeInTheDocument();
  });

  test("check if we are able to login", async () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );

    //To enter login credentials
    const email = await screen.findByTestId("email");
    await user.type(email, "ad@");
    expect(email).toHaveValue("ad@");

    const password = await screen.findByTestId("password");
    await user.type(password, "1111");
    expect(password).toHaveValue("1111");

    const login = await screen.findByTestId("login");
    await user.click(login);

    const homePage = await screen.findByTestId("homepage");
    expect(homePage).toBeInTheDocument();
  });
});
